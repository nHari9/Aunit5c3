import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export const EmployeeDetails = () => {

  const {id}= useParams();
  const [user,setUser]=useState({})

  useEffect(()=>{
    axios.get(`https://reqres.in/api/users/${id}`)
    .then(({data})=>{
        setUSer(data.data)
    })
},[])

    var tasks = user.tasks
  return (
    <div className="user_details">
      <img className="user_image" src={user.image} width="90%" height="75%"/>
      <h4 className="user_name">{user.employee_name}</h4>
      <span className="user_salary">${user.salary}</span>
      <span className="tasks">
        {tasks?tasks.map((e,i)=><li key={i} className="task">{e}</li>):""}
        
      </span>
      Status: <b className="status">{user.status}</b><br />
      Title: <b className="title">{user.title}</b><br />
      {/* Show this button only if user is not already terminated (users status is working) */}
      {user.status !=="terminated"?<button className="fire">Fire Employee</button>:""}
      {/* Show this button only if user is not already team lead or terminated */}
      {user.status!=="terminated"&& user.title!=="Team Lead"?
      <button className="promote">promote</button>:""}
      
    </div>
  );
};
