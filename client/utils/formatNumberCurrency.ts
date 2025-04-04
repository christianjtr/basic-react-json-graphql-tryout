export function formatNumberCurrency(value: number, locale = 'en-IE', currency = 'EUR', options?: Intl.NumberFormatOptions) {
    const defaultOptions: Intl.NumberFormatOptions = {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        ...options,
    };

    return value.toLocaleString(locale, defaultOptions);
}