import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../componentss/organisms/layout/Layout.component";
import InvoiceDetail from "../views/InvoiceDetail";
import InvoiceListings from "../views/InvoiceListings";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: routes.base,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={routes.invoices} replace />,
      },
      {
        path: routes.invoices,
        element: <InvoiceListings />,
      },
      {
        path: routes.invoiceById,
        element: <InvoiceDetail />,
      },
    ],
  },
]);
