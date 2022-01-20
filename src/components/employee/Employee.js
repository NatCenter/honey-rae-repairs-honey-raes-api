import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [totalSpeciallty,updateMessage]=useState(" ")
    const history=useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )


    useEffect(() => {
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
       //we need to store it in an varable
       // and after that we did that we had to map through each data object and update on the updateMessage
               const showAll= employees.map((specialtiesObject)=>
                    specialtiesObject.specialty)

                    updateMessage(showAll.join(", "))

                


    },[employees])
// the single responsibilty principle a component that is required to have only one reason to change.
//using jsx we can just short hand write the code but we still need to use map
//we are using built in fuctions that some else  wrote that we just need to know how to implement it in our code.
    return(
        <> 
            <div>
                Specialties: {totalSpeciallty}
            </div>
        {
            employees.map(
                (employeeObject)=>{
                    return <p key={`employees--${employeeObject.id}`}> <Link to={`employees/${employeeObject.id}`}>{employeeObject.name}</Link> </p>
                }
            )
        }
        <button onClick={()=> history.push("/employees/create")}> Hire new employee</button>
        </>
    )
}