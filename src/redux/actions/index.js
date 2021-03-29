import {types} from "../types"

export const setBalance = (amount) => dispatch => {
    dispatch({
        type: types.SET_BALANCE,
        payload: amount
    })
}

export const setIncome = (amount) => dispatch => {
    dispatch({
        type: types.SET_INCOME,
        payload: amount
    })
}

export const setExpenses = (amount) => dispatch => {
    dispatch({
        type: types.SET_EXPENSES,
        payload: amount
    })
}

export const addTransaction = (item) => dispatch => {
    dispatch({
        type: types.ADD_TRANSACTION,
        payload: item
    })
}

export const selectItem = (item) => dispatch => {
    dispatch({
        type: types.SELECT_ITEM,
        payload: item
    })
}