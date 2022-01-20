import React,{useEffect, useState} from "react";

export const CustomerList=()=>{
    //this is a state change when it runs in the useState
    //weh you update the state it gets updated again!
    const [customers,setCustomers]=useState([])
    const [totalCustomerMessage, updateMessage]=useState("")
//state changes like an event Listener
    useEffect(
        ()=>{
            //converts the json into javascript and modifies the state of the api
            fetch("http://localhost:8088/customers")
            .then(res=>res.json())
            .then((customerArray)=>{
                setCustomers(customerArray)

            })
        },
        []
    )
        // this should run when customers changes.
    useEffect(
        ()=>{
            if(customers.length===1){
                updateMessage("You have 1 customer")
            }
            else{
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )
// the single responsibilty principle a component that is required to have only one reason to change.
//using jsx we can just short hand write the code but we still need to use map
//we are using built in fuctions that some else  wrote that we just need to know how to implement it in our code.
    return(
        <>
        <div>{totalCustomerMessage}</div>
        {
            customers.slice(0,5).map(
                (customerObject)=>{
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                }
            )
        }
        </>
    )
}