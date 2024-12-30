import BackwardLink from "../componentss/atoms/backwards_link/BackwardsList.component";
import InvoiceDetailBody from "../componentss/organisms/invoice_detail_body/InvoiceDetailBody.component";
import InvoiceDetailFooter from "../componentss/organisms/invoice_detail_footer/InvoiceDetailFooter.component";
import InvoiceDetailHeader from "../componentss/organisms/invoice_detail_header/InvoiceDetailHeader.component";

const InvoiceDetail: React.FC = () => {
  return (
    <>
      <BackwardLink />
      <InvoiceDetailHeader />
      <InvoiceDetailBody />
      <InvoiceDetailFooter />
    </>
  );
};

export default InvoiceDetail;
