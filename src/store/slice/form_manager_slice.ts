import { createSlice } from "@reduxjs/toolkit";
import { FormActionType, FormManager } from "../types/form_manager_slice.types";
import { RootState } from "..";


const initialState: FormManager = {
    formState: "closed",
    formActionType: FormActionType.DEFAULT


}
const name = "formManager"
const formManagerSlice = createSlice({
    initialState,
    name,
    reducers: {
        toggleForm: (state) => {
            state.formState = state.formState === "open" ? "closed" : "open";
        },
        setFormActionType: (state, action) => {
            state.formActionType = action.payload
        }

    }
})


export const { toggleForm, setFormActionType } = formManagerSlice.actions;

export const getFormState = (state:RootState)=> state.formState.formState;

export default formManagerSlice.reducer;
