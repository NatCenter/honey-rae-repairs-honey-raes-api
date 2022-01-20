import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employee/Employee"
import {NewEmployee} from "./employee/NewEmployee"
import { TicketForm } from "./serviceTickets/TicketForm"
import { TicketList } from "./serviceTickets/TicketList"
import {Ticket} from "./serviceTickets/Ticket"
import {EmployeeDetails} from "./employee/EmployeeDetails"
export const ApplicationViews = () => {
    return (
        //paddern Match
        <>
            <Route exact path="/customers">
                <CustomerList/>
            </Route>
            <Route exact path="/employees">
                <EmployeeList/>
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <EmployeeDetails/>
            </Route>
            <Route path="/employees/create">
                <NewEmployee/>
            </Route>
            <Route  exact path="/tickets">
                <TicketList/>
            </Route>
            <Route  exact path="/tickets/:ticketId(\d+)">
                <Ticket/>
            </Route>
            <Route  path="/tickets/create">
                <TicketForm/>
            </Route>
        </>
    )
}