import InvoiceList from "../componentss/organisms/invoice_list/InvoiceList.component";
import InvoiceListHeader from "../componentss/organisms/invoice_list_header/InvoiceListHeader.component";

const HomeView: React.FC = () => {
  return (
    <>
      <InvoiceListHeader />
      <InvoiceList />
    </>
  );
};

export default HomeView;
