import React from "react"
import {useSelector} from "react-redux"
import Dashboard from "../layouts/Dashboard"
import TransactionList from "../components/TransactionList"
import Balance from "../components/Balance"

const Transactionspage = () => {
    const transactions = useSelector(state => state.transactions.transactions)

    return(
    <Dashboard page="Incomepage">
        <div className="homepage">
            <div className="homepage__body">
                <Balance/>
                <div className="homepage__body__transactions">
                    <div className="homepage__body__transactions__recent">
                            <div className="homepage__body__transactions__recent__all__title">
                                <h2>All Transactions</h2>
                            </div>
                        <TransactionList data={transactions} single/>
                    </div>
                </div> 
            </div>
        </div>
    </Dashboard>
    )
}

export default Transactionspage