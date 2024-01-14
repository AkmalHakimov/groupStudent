import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Student() {
  const [students, setStudens] = useState([]);
  const [curItm, setCurItm] = useState("");

  useEffect(() => {
    getStudents();
  }, []);

  function getStudents() {
    axios({
      url: "http://localhost:8080/student",
      method: "get",
    }).then((res) => {
      setStudens(res.data);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      groupId: e.target[2].value,
    };
    if (curItm == "") {
      axios({
        url: "http://localhost:8080/student",
        method: "post",
        data: obj,
      }).then((res) => {
        getStudents();
      });
    } else {
      axios({
        url: "http://localhost:8080/student/" + curItm.id,
        method: "put",
        data: obj,
      }).then((res) => {
        getStudents();
        setCurItm("");
      });
    }
    document.forms[0].reset();
  }
  function Edite(item) {
    let myForm = document.forms[0];
    myForm.elements[0].value = item.firstName;
    myForm.elements[1].value = item.lastName;
    myForm.elements[2].value = item.groupId;
    setCurItm(item);
  }

  return (
    <div className="container my-5">
      <div className="col-5">
        <form onSubmit={handleSubmit} className="d-flex align-items-center">
          {/* <Input placeholder="add group.." /> */}
          <input type="text" placeholder="firstName" className="form-control" />
          <input type="text" placeholder="lastName" className="form-control" />
          <input type="text" placeholder="groupId" className="form-control" />
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
      <table className="table my-4">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>groupId</th>
            <th>Edite</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.groupId}</td>
                <td>
                  <button
                    onClick={() => Edite(item)}
                    className="btn btn-warning"
                  >
                    Edite
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
