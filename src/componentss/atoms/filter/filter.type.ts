
export interface DataSource {
    [key: string]: unknown
}

export interface FilterProps {
    data: DataSource[];
    filterKey: string;
    options: string[];
    render: (data: DataSource) => JSX.Element;
}