// Formats a number to a specified number of decimal places
// and ensures the result is a valid number

export const formatNumber = (value: number, decimalPlaces: number = 2): number => {
    if (isNaN(value) || !isFinite(value)) {
        return 0;
    }

    // Round to specified decimal places and convert back to number
    return parseFloat(value.toFixed(decimalPlaces));
};

//Safely parses a string to a number, returning 0 if invalid

export const safeParseFloat = (value: string): number => {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
};

// Formats a number for display as currency

export const formatCurrency = (
    value: number,
    currency: string,
    locale: string = 'en-US'
): string => {
    if (isNaN(value) || !isFinite(value)) {
        value = 0;
    }

    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            currencyDisplay: 'symbol',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    } catch (error) {
        // Fallback if the currency or locale is not supported
        return value.toFixed(2);
    }
};