import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const EmployeeDetails=()=>{
    const [employees, set] = useState({})
    const {employeeId}=useParams()

    
    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(set)
        },
        [ employeeId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
        <h1>Specialties </h1>
        <section className="specialty">
        <h2 className="Name">{employees.name}</h2>
        <p className="discription">Specialty is {employees.specialty}.</p>
        </section>
        </>
    )

}