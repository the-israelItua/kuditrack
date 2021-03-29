import React, {useRef} from "react"
import {useSelector} from "react-redux"
import Dashboard from "../layouts/Dashboard"
import TransactionList from "../components/TransactionList"
import AddItemModal from "../components/AddItemModal"
import Balance from "../components/Balance"

const Expensespage = () => {
    const transactions = useSelector(state => state.transactions.transactions)
    const expense = transactions?.filter(item => item.type === "Expense")

    const addItemModal = useRef(null)

    const openRemoveItemModal = e => {
        e.stopPropagation()
        e.preventDefault()
       addItemModal.current.open()
    }

    return(
    <>
    <AddItemModal ref={addItemModal} type="Expense"/>
    <Dashboard page="Expensespage">
    <div className="homepage">
            <div className="homepage__body">
                <Balance/>
                <div className="homepage__body__transactions">
                    <div className="homepage__body__transactions__recent">
                            <div className="homepage__body__transactions__recent__all__title">
                                <h2>Expenses</h2>
                                <button className="homepage__body__transactions__recent__all__title__exp" onClick={openRemoveItemModal}>Enter Expenses</button>
                            </div>
                        <TransactionList data={expense} single/>
                    </div>
                </div> 
            </div>
        </div>
    </Dashboard>
    </>
    )
}

export default Expensespage