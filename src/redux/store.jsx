import { configureStore } from "@reduxjs/toolkit";
import { ricettaReducer } from "./ricettaSlice";

export default configureStore({
    reducer:{
        addRicetta: ricettaReducer
    }
})