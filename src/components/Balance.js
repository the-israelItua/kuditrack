import React from "react"
import {useSelector} from "react-redux"
import {formatCurrency} from "../utils/formatCurrency"

const Balance = () => {
    const balance = useSelector(state => state.transactions.balance)

    return(
        <div className="homepage__body__top">
            <h1>Kudi<span>Track</span></h1>
            <div className="homepage__body__balance">
                <p>Balance: </p>
                <h2>{formatCurrency(balance)}</h2>
            </div>
        </div> 
    )
}

export default Balance