import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import './Tickets.css'

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const [totalTickets, updateMessage]=useState("")
    const history=useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)

                })
        },
        []
    )

useEffect(
        ()=>{
            if(tickets.length===1){
                updateMessage("You have 1 ticket")
            }
            else{
                updateMessage(`There are ${tickets.length} open tickets`)
            }
        },
        [tickets]
    )
    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
            
        })
        .then(
            ()=>{
                history.go("/serviceTickets/")
            }
        )
    }


// the single responsibilty principle a component that is required to have only one reason to change.
//using jsx we can just short hand write the code but we still need to use map
//we are using built in fuctions that some else  wrote that we just need to know how to implement it in our code.
// when we use a ? it is called optional chaining
    return(
        <>
        <button onClick={()=>{history.push("/tickets/create")}}>Create Ticket </button>
           <div>{totalTickets} </div>
        {
            
            tickets.map(
                
                (ticket)=>{
                    let className='ticket'
                    if(ticket.emergency===true){
                        className='emergency'
                    }

                    return <p className={className}  >
                    {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name} <button onClick={() => {
    deleteTicket(ticket.id) 

}}>Delete</button>
                </p>
                }
            )
        }
        </>
    )
}