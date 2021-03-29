import React from "react"
import {useHistory} from "react-router-dom"
import IncomeIcon from "@material-ui/icons/TrendingDown"
import ExpenseIcon from "@material-ui/icons/TrendingUp"
import DashboardIcon from "@material-ui/icons/Dashboard"
import AllIcon from "@material-ui/icons/AllInclusive"

const Sidebar = () => {
    const page = window.location.pathname

    const history = useHistory()

    return (
        <aside className="sidebar">
           <ul>
                <li onClick={() => history.push("/")}>
                    <DashboardIcon className={page === "/" ? "mobile-nav__dashboard" : ""}/>
                    <p className={page === "/" ? "mobile-nav__dashboard" : ""}>Dashboard</p>
                </li>
                <li onClick={() => history.push("/income")}>
                    <IncomeIcon className={page === "/income" ? "mobile-nav__income" : ""}/>
                    <p className={page === "/income" ? "mobile-nav__income" : ""}>Income</p>
                </li>
                <li onClick={() => history.push("/expenses")}>
                    <ExpenseIcon className={page === "/expenses" ?"mobile-nav__expense" : ""}/>
                    <p className={page === "/expenses" ?"mobile-nav__expense" : ""}>Expenses</p>
                </li>
                <li onClick={() => history.push("/transactions")}>
                    <AllIcon className={page === "/transactions" ?"mobile-nav__transactions" : ""}/>
                    <p className={page === "/transactions" ?"mobile-nav__transactions" : ""}>Transactions</p>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar 