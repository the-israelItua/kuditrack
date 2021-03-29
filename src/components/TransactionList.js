import React from "react"
import TransactionItem from "./TransactionItem"

const TransactionList = ({data, all, single}) => {
    return(
        <div className={all ? "transaction-list all" : single ? "transaction-list single" : "transaction-list"}>
            {data?.length === 0 ?
            <div className={!all ? "transaction-list__empty" : "transaction-list__empty all__empty"}>
                <p>You made no recent transactions</p> 
            </div>:
             data?.map(item => <TransactionItem transaction={item} key={item.id}/>)
            }
            
        </div>
    )
}

export default TransactionList