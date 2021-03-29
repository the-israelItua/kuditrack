import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import { reducers } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer, compose(applyMiddleware(reduxThunk)));
let persistor = persistStore(store);

export { store, persistor };
