import {combineReducers} from "redux"
import {transactionsReducer} from './transactions'

export const reducers = combineReducers({
   transactions: transactionsReducer
})

