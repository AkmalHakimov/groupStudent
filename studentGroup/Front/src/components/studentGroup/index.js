import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function StudentGroup() {
    const [students, setStudens] = useState([]);

    const {groupId} = useParams(); 
    useEffect(() => {
      getStudents();
    }, []);
  
    function getStudents() {
      axios({
        url: "http://localhost:8080/student?groupId=" + groupId,
        method: "get",
      }).then((res) => {
        setStudens(res.data)
      });
    }
    
  return (
    <div className='container my-5'>
          <div className="col-5">
        
      </div>
      <table className="table my-4">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>groupId</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>       
    </div>
  )
}
