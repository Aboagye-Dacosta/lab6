const baseUrl = "https://invoice-app-bknd-strapi-cloud.onrender.com";

export const Environments = {
    baseUrl,
    authLogin: `${baseUrl}/login`,
    allInvoices: `${baseUrl}/invoices`,
    singleInvoice: (invoiceId: number) => `${baseUrl}/invoice/${invoiceId}`
}