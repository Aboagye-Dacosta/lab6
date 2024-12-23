export type AppFilter = "all" | "paid" | "pending" | "draft";


export interface AppFiltersInterface {
    filters: AppFilter[];
}