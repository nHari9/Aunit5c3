import { useEffect, useState } from "react"
import axios from "axios"
import { Link} from "react-router-dom"

export const EmployeeList = () => {
  const [emp,setEmp]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/employee")
    .then(({data})=>{
        setEmp(data);
    })
},[])

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {emp.map((e)=>
            <div className="employee_card" key={e.id} onClick={()=>{
             <Link to={`/employees/${employees.id}`}>
            <img className="employee_image" src={e.image} width="90%" height="75%"/>
            <span className="employee_name">{e.employee_name}</span><br />
            <span className="employee_title">{e.title}</span>
             </Link>
            }}>

          </div>)}

    </div>
  );
};
