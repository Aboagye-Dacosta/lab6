
export const filterByProperty = <T, K extends keyof T>(data: T[], property: K, values: T[K][]): T[] => {
    return data.filter(item => values.includes(item[property]));
}