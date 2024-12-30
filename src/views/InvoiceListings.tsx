import InvoiceList from "../componentss/organisms/invoice_list_body/InvoiceList.component";
import InvoiceListHeader from "../componentss/organisms/invoice_list_header/InvoiceListHeader.component";

const InvoiceListings: React.FC = () => {
  return (
    <>
      <InvoiceListHeader />
      <InvoiceList />
    </>
  );
};

export default InvoiceListings;
