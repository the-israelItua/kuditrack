import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import {newId} from "../utils/newId"
import {setBalance, setIncome, addTransaction} from "../redux/actions"
import CurrencyFormat from 'react-currency-format'
import Logo from "../assets/images/gettingstarted.png"

const GetStartedPage = () => {
    const [stage, setStage] = useState(1)
    const [amount, setAmount] = useState("")
    const [amountError, setAmountError] = useState("")

    const dispatch = useDispatch()

    const history = useHistory()

    const handleSubmit = () => {
        if(amount === "" || parseInt(amount) === 0){
            setAmountError("Enter a valid balance")
            return
        }
        const item = {
            id: newId("Income"),
            type: "Income",
            title: "Initial amount",
            amount,
            description: "Initial amount.",
            date: new Date().toDateString(),
            time: new Date().toISOString()
        }
        dispatch(setBalance(amount))
        dispatch(setIncome(amount))
        dispatch(addTransaction(item))
        history.push("/")
    }

    return (
        stage === 1 ? 
        <div className="get-started">
            <img src={Logo} alt=""/>
            <div className="get-started__body">
                <h3>Get Started</h3>
                <p>We will help you record your expenses and income,</p>
                <p>to allow you keep track of your finances.</p>
                <button onClick={() => setStage(2)}>Continue</button>
            </div>
        </div>
        :
        <div className="get-started">
            <h1 onClick={() => setStage(1)}>Kudi<span>Track</span></h1>
            <div className="get-started__body">
                <h3>How much is your current balance?</h3>
                <form onSubmit={handleSubmit}>
                <CurrencyFormat
                    name="price"
                    inputmode="numeric"
                    placeholder="Your current balance"
                    thousandSeparator={true}
                    value={amount}
                    onValueChange={values => {
                    const {value} = values
                    setAmount(value)
                    }}
                    prefix={'N  '}
                    autoFocus
                />
                <br/>
                <p className="form--error">{amountError}</p>
                <button type="submit">Next</button>
                </form>
            </div>
        </div>
    )
}

export default GetStartedPage