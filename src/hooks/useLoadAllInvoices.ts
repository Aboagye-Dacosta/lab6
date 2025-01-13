import { useQuery } from "react-query"
import { getAllInvoices } from "../utils/getAllInvoices"
import { ProductStatus } from "../types/invoice_item.types";

export const useLoadAllInvoices = () => {
    const { data, isFetching } = useQuery<ProductStatus[]>({
        queryKey: ['invoices'],
        queryFn: getAllInvoices,
        refetchInterval: 60000, // refetch every 60 seconds
    });


    return {
        invoices: data,
        isLoading: isFetching,
    }
}