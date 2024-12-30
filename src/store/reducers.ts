import appInvoiceFilterReducer from './slice/app_invoice_filter_slice';
import appInvoiceReducer from './slice/app_invoice_slice';
import appThemeReducer from './slice/app_theme_slice';
import appFormManagerReducer from './slice/form_manager_slice';
export const reducers = {
    theme: appThemeReducer,
    invoices: appInvoiceReducer,
    filters: appInvoiceFilterReducer,
    formState: appFormManagerReducer,
}