import { configureStore } from "@reduxjs/toolkit";
import weatherReducer  from "./Features/Report/reportSlice";

const store = configureStore({
reducer:{
  weatherReducer,

}
})

export default store;