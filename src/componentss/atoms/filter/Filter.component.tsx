import { filterByProperty } from "../../../utils";
import { FilterProps } from "./filter.type";

import styles from "./filter_styles.module.css";

const Filter: React.FC<FilterProps> = ({
  data,
  filterKey,
  options,
  render,
}) => {
  const invoices = filterByProperty(data, filterKey, options);
  return (
    <>
      {invoices.length === 0 ? (
        <div className={styles.empty_invoices}>
          <img src="/assets/illustration-empty.svg" alt="empty invoices" />
        </div>
      ) : (
        invoices.map((item) => {
          return render(item);
        })
      )}
    </>
  );
};

export default Filter;
