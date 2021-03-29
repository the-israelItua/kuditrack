import React from "react"
import Sidebar from "../components/Sidebar"
import MobileNav from "../components/MobileNav"

const Dashboard = ({children}) => {
    return(
        <section className="dashboard">
            <Sidebar/>
            {
                children
            }
            <MobileNav/>
        </section>
    )
}

export default Dashboard