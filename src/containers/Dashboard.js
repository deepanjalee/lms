import React from "react"
 
import { Tabs } from "../components/Tabs";





const Dashboard = () => {

    const contents = [
        {title: "Books",elements: <h1>Book contenets go hear</h1>},
        {title: "Members",elements: <h1>Members contenets go hear</h1>},
    ];
    
    return(
        <Tabs contents = { contents } />

    )
       
    
}

export default Dashboard 
