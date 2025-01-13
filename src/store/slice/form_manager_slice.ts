import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { FormActionType, FormManager } from "../types/form_manager_slice.types";


const initialState: FormManager = {
    formState: "closed",
    formActionType: FormActionType.DEFAULT,
    isDraft: false

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
        },
        setIsDraft: (state, action) => {
            state.isDraft = action.payload
        }

    }
})


export const { toggleForm, setFormActionType } = formManagerSlice.actions;

export const getFormState = (state: RootState) => state.formState.formState;
export const getFormActionType = (state: RootState) => state.formState.formActionType;
export const getIsDraft = (state: RootState) => state.formState.isDraft;

export default formManagerSlice.reducer;
