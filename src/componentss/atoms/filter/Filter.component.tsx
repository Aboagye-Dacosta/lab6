import { filterByProperty } from "../../../utils";
import { FilterProps } from "./filter.type";

const Filter: React.FC<FilterProps> = ({
  data,
  filterKey,
  options,
  fallback,
  render,
}) => {
  const invoices = filterByProperty(data, filterKey, options);
  return (
    <>
      {invoices.length === 0
        ? fallback
        : invoices.map((item) => {
            return render(item);
          })}
    </>
  );
};

export default Filter;
