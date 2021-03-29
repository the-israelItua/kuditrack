import {types} from "../types"

const initialState = {
    balance: 0,
    income: 0,
    expenses: 0,
    transactions: [],
    selected: {}
}

export const transactionsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SET_BALANCE:
            return {...state, balance: action.payload} 
        case types.SET_INCOME:
            const newIncome = parseInt(state.income) + parseInt(action.payload)
            const newBalance = newIncome - parseInt(state.expenses)
            return {...state, income: newIncome, balance: newBalance}
        case types.SET_EXPENSES:
            const newExpenses = parseInt(state.expenses) + parseInt(action.payload)
            const newBalances = parseInt(state.income) - newExpenses
            return {...state, expenses: newExpenses, balance: newBalances}
        case types.ADD_TRANSACTION:
            return {...state, transactions: [action.payload, ...state.transactions]}
        case types.SELECT_ITEM: 
            return {...state, selected: action.payload}
        default:
            return state
    }
}