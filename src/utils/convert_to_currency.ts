export const convertToCurrency = (value: number) => {
    if (isNaN(value)) {
        return 'Invalid amount';
    }

    try {
        // Get the user's locale from the browser
        const userLocale = navigator.language || 'en-US'; // Fallback to 'en-US' if locale isn't available

        return  "£" + new Intl.NumberFormat(userLocale, {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value).split('$')[1];
    } catch {
        return 'Invalid currency format';
    }
};
