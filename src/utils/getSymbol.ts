import currencies from "../data/currencies";

export const getSymbol = (key: string): string => {
    const currency = currencies.find(k => k.code === key);
    return currency?.symbol || ''
}