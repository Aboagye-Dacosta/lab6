import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import data from "../../data/data.json";
import { ProductStatus } from "../../types/invoice_item.types";

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
        },
        updateInvoiceStatus: (state, action) => {
            const index = state.findIndex(invoice => invoice.id === action.payload.id)
            state[index].status = action.payload.status
        }

    }
})

export const { saveInvoice, updateInvoice, deleteInvoice, updateInvoiceStatus } = appInvoiceSlice.actions;
export const getInvoices = (state: RootState) => state.invoices;

export const getInvoiceById = (invoiceId: string) => (state: RootState) => state.invoices.find(invoice => invoice.id === invoiceId);

export default appInvoiceSlice.reducer;