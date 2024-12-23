export const convertToCurrency = (value: number, currency: string = 'EUR') => {
    if (isNaN(value)) {
        return 'Invalid amount';
    }

    try {
        return new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    } catch {
        return 'Invalid currency format';
    }
}
