import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { AppFiltersInterface } from "../types/app_filter_slice.types";



const initialState: AppFiltersInterface = {
    filters: ["draft", "pending", "paid"]
}

const name = "appInvoiceFilter";

const appInvoiceFilterSlice = createSlice({
    name,
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        }
    }
});

export const { setFilters } = appInvoiceFilterSlice.actions;

export const getFilters = (state: RootState) => state.filters;

export default appInvoiceFilterSlice.reducer;