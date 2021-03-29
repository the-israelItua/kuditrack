import React, {forwardRef, memo, useImperativeHandle, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {newId} from "../utils/newId"
import {addTransaction, setIncome, setExpenses} from "../redux/actions"
import Modal from './dashboard/Modal'
import CurrencyFormat from 'react-currency-format'

const AddItemModal = forwardRef(({type}, ref) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [titleError, setTitleError] = useState("")
    const [amountError, setAmountError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")
    const [expenseError, setExpenseError] = useState("")
    
    const dispatch = useDispatch()
    const balance = useSelector(state => state.transactions.balance)
    const modal = useRef(null)

  useImperativeHandle(ref, () => ({
    async open() {
      modal.current.open()
    },
    async close() {
      modal.current.close()
    }
  }))

  const handleSubmit = (e) => {
      e.preventDefault()
      setTitleError("")
      setAmountError("")
      setDescriptionError("")
      setExpenseError("")
      if(title === ""){
          setTitleError("Required Field")
          return
      } else if(amount === ""){
          setAmountError("Required Field")
          return
      } else if(description === ""){
          setDescriptionError("Required Field")
          return
      } else if(type  === "Expense" && amount > balance){
        setExpenseError("Expense cannot exceed balance.")
        return
      } else{
          const item = {
              id: newId(type),
              type,
              title,
              amount,
              description,
              date: new Date().toDateString(),
              time: new Date().toISOString()
          }
          dispatch(addTransaction(item))
          type === "Income" ? dispatch(setIncome(amount)) : dispatch(setExpenses(amount))
          setTitle("")
          setAmount("")
          setDescription("")
          setTitleError("")
          setAmountError("")
          setDescriptionError("")
          setExpenseError("")
          modal.current.close()
      }
  }

  return (
    <Modal ref={modal} title={type === "Income" ? "Add Income" : "Remove Expense"}>
     <div className="add-item-modal">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">{type === "Income" ? "Income received from?" : "Expense spent on?"}</label>
                <input type="text" name="title" value={title} onChange={e => {setTitle(e.target.value); setTitleError()}} autoFocus/>
                <p className="form--error">{titleError}</p>
            </div>
            <div className="form-group">
                <label htmlFor="amount">{type === "Income" ? "Amount received?" : "Amount spent?"}</label>
                <CurrencyFormat
                    name="price"
                    inputmode="numeric"
                    thousandSeparator={true}
                    value={amount}
                    onValueChange={values => {
                    const {value} = values
                    setAmount(value)
                    setAmountError("")
                    }}
                    prefix={'N  '}
                />
                <p className="form--error">{amountError}</p>
            </div>
            <div className="form-group">
                <label htmlFor="description">{type === "Income" ? "Income Description" : "Expense Description"}.</label>
                <textarea id="" cols="20" rows="10" value={description} onChange={e => {setDescription(e.target.value); setDescriptionError("")}}/>
                <p className="form--error">{descriptionError}</p>
            </div>
            <p className="form--error">{expenseError}</p>
            <button type="submit">{type === "Income" ? "Add Income" : "Remove Expense"}</button>
        </form>
      </div>
    </Modal>
  )
})

export default memo(AddItemModal)
