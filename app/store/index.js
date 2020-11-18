import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import appReducer from "../redux/reducers";
import { createStore } from "redux";
import middleware from "../middleware";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist:[
    'cart'
  ]
};
const presistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(presistedReducer, middleware);

const persistor = persistStore(store);

export { store, persistor };
