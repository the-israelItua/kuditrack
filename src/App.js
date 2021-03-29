import React from "react"
import "./assets/scss/app.scss"
import {useSelector} from "react-redux"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import ScrollReset from "./utils/scrollReset"
import GetStarted from "./pages/GetStartedPage"
import Homepage from "./pages/Homepage"
import IncomePage from "./pages/IncomePage"
import ExpensesPage from "./pages/ExpensesPage"
import TransactionsPage from "./pages/TransactionsPage"

const App = () => {
    const balance = useSelector(state => state.transactions.balance)
    const income = useSelector(state => state.transactions.income)
    const expenses = useSelector(state => state.transactions.expenses)

    return(
        <BrowserRouter>
            <ScrollReset/>
            <Switch>
                {balance === 0 && income === 0 && expenses === 0 ?
                <>
                    <Route path="/getting-started"  component={GetStarted}/>
                    <Redirect to="/getting-started"/>
                </>
                    :
                <>
                <Route path="/" exact component={Homepage}/> 
                <Route path="/income" component={IncomePage}/>
                <Route path="/expenses" component={ExpensesPage}/>
                <Route path="/transactions" component={TransactionsPage}/>
                <Redirect to="/"/>
                </>
                }
            </Switch>
        </BrowserRouter>
    )
}

export default App