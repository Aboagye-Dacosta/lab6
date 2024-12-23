

export const convertToFormattedDate = (date: string) => {
    const dateObj = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    };
    return dateObj.toLocaleDateString("en-GB", options);
}

