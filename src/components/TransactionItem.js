import React, {useRef} from "react"
import {useDispatch} from "react-redux"
import {formatCurrency} from "../utils/formatCurrency"
import {selectItem} from "../redux/actions"
import IncomeIcon from "@material-ui/icons/TrendingDown"
import ExpenseIcon from "@material-ui/icons/TrendingUp"
import moment from "moment"
import DescriptionModal from "./DescriptionModal"


const TransactionItem = ({transaction}) => {
    const dispatch = useDispatch()
    const descriptionModal = useRef(null)

    const openDescriptionModal = e => {
        dispatch(selectItem(transaction))
        e.stopPropagation()
        e.preventDefault()
        descriptionModal.current.open()
    }

    const truncate = (string) => {
        const newString = string.length > 16 ? `${string.slice(0,13)}...` : string;
        return newString
    }

    const time = moment(transaction.time).fromNow()

    return(
    <>
    <DescriptionModal ref={descriptionModal}/>
    <div className="transaction-item">
        <div className="transaction-item__top">
            <div className="transaction-item__detail">
                {
                    transaction.type === "Income" ? <IncomeIcon className="icon transaction-item__detail__income"/> : <ExpenseIcon className="icon transaction-item__detail__expense"/> 
                }
                    <p>{truncate(transaction.title)}</p>
            </div>
            <p>
            {formatCurrency(transaction.amount)}
            </p>
            <p onClick={openDescriptionModal} className="transaction-item__detail__view">View Details</p>
        </div>
        <p className="transaction-item__top__date">{transaction.date}</p>
        <p className="transaction-item__top__date">{time}</p>
    </div>
    </>
    )
}

export default TransactionItem