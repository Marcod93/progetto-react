import { createSlice } from "@reduxjs/toolkit";

export const ricettaSlice = createSlice({
    name: "ricetta",
    initialState:{
        value: [
            {
                id: 0,
                name: "Orecchiette vegane",
                ingredienti: "350gr orecchiette, 1 cespo radicchio, 150gr di uva, sale, pepe, folgie salvia",
                descrizione: "reparate il condimento per le orecchiette con radicchio, uva e aceto balsamico:",
                img: "https://cdn.pixabay.com/photo/2015/11/16/16/23/pasta-1045945_1280.jpg"
            }

        ],
    },
    reducers:{
        add: (state, action) =>{
            state.value.push(action.payload)
        }
    }
})

export const {add} = ricettaSlice.actions;

export const ricettaReducer = ricettaSlice.reducer;