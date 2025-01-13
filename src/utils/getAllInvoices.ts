import { Environments } from "../environment"

export const getAllInvoices = async () => {
    const response = await fetch(Environments.allInvoices); 
    return response.json();
}