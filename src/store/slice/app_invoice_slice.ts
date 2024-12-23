import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ProductStatus } from "../../componentss/molecules/invoice_card/invoice_card.types";
import data from "../../data/data.json";

const initialState: ProductStatus[] = [
    ...(data as unknown as ProductStatus[]),
]

const name = 'appInvoice'

const appInvoiceSlice = createSlice({
    name,
    initialState,
    reducers: {
        saveInvoice: (state, action) => {
            return [...state, action.payload]
        },
        updateInvoice: (state, action) => {
            const index = state.findIndex(invoice => invoice.id === action.payload.id)
            state[index] = action.payload
        },
        deleteInvoice: (state, action) => {
            return state.filter(invoice => invoice.id !== action.payload)
        }

    }
})

export const { saveInvoice, updateInvoice, deleteInvoice } = appInvoiceSlice.actions;
export const getInvoices = (state: RootState) => state.invoices;

export default appInvoiceSlice.reducer;