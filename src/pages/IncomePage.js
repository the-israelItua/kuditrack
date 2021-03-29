import React, {useRef} from "react"
import {useSelector} from "react-redux"
import Dashboard from "../layouts/Dashboard"
import TransactionList from "../components/TransactionList"
import AddItemModal from "../components/AddItemModal"
import Balance from "../components/Balance"

const Incomepage = () => {
    const transactions = useSelector(state => state.transactions.transactions)
    const income = transactions?.filter(item => item.type === "Income")

    const addItemModal = useRef(null)

    const openAddItemModal = e => {
        e.stopPropagation()
        e.preventDefault()
        addItemModal.current.open()
    }

    return(
    <>
    <AddItemModal ref={addItemModal} type="Income"/>
    <Dashboard page="Incomepage">
        <div className="homepage">
            <div className="homepage__body">
                <Balance/>
                <div className="homepage__body__transactions">
                    <div className="homepage__body__transactions__recent">
                            <div className="homepage__body__transactions__recent__all__title">
                                <h2>Income</h2>
                                <button className="homepage__body__transactions__recent__all__title__inc" onClick={openAddItemModal}>Enter Income</button>
                            </div>
                        <TransactionList data={income} single/>
                    </div>
                </div> 
            </div>
        </div>
    </Dashboard>
    </>
    )
}

export default Incomepage