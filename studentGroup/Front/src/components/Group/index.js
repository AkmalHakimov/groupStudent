import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

export default function Group() {

    const [groups, setGroups] = useState([]);
  const [curItm, setCurItm] = useState("");
    const navigate = useNavigate();
  useEffect(() => {
    getGroups();
  }, []);

  function getGroups() {
    axios({
      url: "http://localhost:8080/group",
      method: "get",
    }).then((res) => {
      setGroups(res.data)
    });
  }


function handleSubmit(e){
  e.preventDefault();
  if(curItm==""){
    axios({
      url:"http://localhost:8080/group",
      method:"post",
      data: {
        name: e.target[0].value
      }
    }).then((res)=>{
      getGroups();
    })
  }else {
    axios({
      url:"http://localhost:8080/group/" + curItm.id,
      method:"put",
      data: {
        name: e.target[0].value
      }
    }).then((res)=>{
      getGroups();
      setCurItm("");
    })
  }
  document.forms[0].reset();

  
}
function Edite(item){
    document.forms[0].elements[0].value = item.name;
    setCurItm(item);
}

function Del(id){
  axios({
    url: "http://localhost:8080/group/" + id,
    method: "delete"
  }).then((res)=>{
    getGroups();
  })
}

function goToStudents(id){
    navigate("/group/" + id)
}



  return (
    <div className='container my-5'>
        <div className="col-5">
        <form onSubmit={handleSubmit} className="d-flex align-items-center">
          {/* <Input placeholder="add group.." /> */}
          <input type="text" placeholder="add group.." className="form-control" />
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
      <table className="table my-4">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Edite</th>
              <th>Delete</th>
              <th>Students</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td><button onClick={()=>Edite(item)} className="btn btn-warning">Edite</button></td>
                  <td><button onClick={()=>Del(item.id)} className="btn btn-danger">Delete</button></td>
                  <td><button onClick={()=>goToStudents(item.id)} className="btn btn-primary">Students</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  )
}
