import React, {useRef, useState} from "react"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {formatCurrency} from "../utils/formatCurrency"
import Dashboard from "../layouts/Dashboard"
import TransactionList from "../components/TransactionList"
import AddItemModal from "../components/AddItemModal"
import Balance from "../components/Balance"

const Homepage = () => {
    
    const income = useSelector(state => state.transactions.income)
    const expenses = useSelector(state => state.transactions.expenses)
    const transactions = useSelector(state => state.transactions.transactions)
   
    const incomeTransactions = transactions?.filter(item => item.type === "Income")
    const expenseTransactions = transactions?.filter(item => item.type === "Expense")

    const addItemModal = useRef(null)

    const [modalType, setModalType] = useState("Income")

    const openAddItemModal = e => {
        setModalType("Income")
        e.stopPropagation()
        e.preventDefault()
        addItemModal.current.open()
    }

    const openRemoveItemModal = e => {
        setModalType("Expense")
        e.stopPropagation()
        e.preventDefault()
        addItemModal.current.open()
    }

    return(
    <>
    <AddItemModal ref={addItemModal} type={modalType}/>
    <Dashboard>
        <div className="homepage">
            <div className="homepage__body">
                <Balance/>
                <div className="homepage__body__details">
                    <div className="homepage__body__details__card">
                        <p>Income</p>
                        <h3 className="homepage__body__details__card__inc">{formatCurrency(income)}</h3>
                    </div>
                    <div className="homepage__body__details__card">
                        <p>Expenses</p>
                        <h3 className="homepage__body__details__card__exp">{formatCurrency(expenses)}</h3>
                    </div>
                </div> 
                <div className="homepage__body__transactions">
                    <div className="homepage__body__transactions__recent">
                        <h2 className="homepage__body__transactions__recent__title">Recent Transactions</h2>
                        <TransactionList data={transactions?.slice(0,5)} all/>
                        <div className="homepage__body__transactions__all__expense__link">
                                <Link to="/transactions">See all transactions.</Link>
                            </div>
                    </div>
                    <div className="homepage__body__transactions__all">
                        <div className="homepage__body__transactions__all__income">
                            <div className="homepage__body__transactions__all__income__title">
                                <h2>Income</h2>
                                <button onClick={openAddItemModal}>Enter Income</button>
                            </div>
                            <TransactionList data={incomeTransactions?.slice(0,3)}/>
                            <div className="homepage__body__transactions__all__expense__link">
                                <Link to="/income">See all income transactions.</Link>
                            </div>
                        </div>
                        <div className="homepage__body__transactions__all__expense">
                            <div className="homepage__body__transactions__all__expense__title">
                                <h2>Expenses</h2>
                                <button onClick={openRemoveItemModal}>Enter Expense</button>
                            </div>
                            <TransactionList data={expenseTransactions?.slice(0,3)}/>
                            <div className="homepage__body__transactions__all__expense__link">
                                <Link to="/expenses">See all expense transactions.</Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </Dashboard>
    </>
    )
}

export default Homepage