import React from "react"
import {useHistory} from "react-router-dom"
import IncomeIcon from "@material-ui/icons/TrendingDown"
import ExpenseIcon from "@material-ui/icons/TrendingUp"
import DashboardIcon from "@material-ui/icons/Dashboard"

const MobileNav = () => {
    const page = window.location.pathname
    const history = useHistory()
    return(
        <div className="mobile-nav">
            <ul>
                <li onClick={() => history.push("/income")}>
                    <IncomeIcon className={page === "/income" ? "mobile-nav__income" : ""} />
                    <p className={page === "/income" ? "mobile-nav__income" : ""}>Income</p>
                </li>
                <li onClick={() => history.push("/")}>
                    <DashboardIcon className={page === "/" ? "mobile-nav__dashboard" : ""}/>
                    <p className={page === "/" ? "mobile-nav__dashboard" : ""}>Dashboard</p>
                </li>
                <li onClick={() => history.push("/expenses")}>
                    <ExpenseIcon className={page === "/expenses" ?"mobile-nav__expense" : ""}/>
                    <p className={page === "/expenses" ?"mobile-nav__expense" : ""}>Expenses</p>
                </li>
            </ul>
        </div>

    )
}

export default MobileNav