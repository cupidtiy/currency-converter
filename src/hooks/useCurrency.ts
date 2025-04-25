import React, { useEffect, useState } from 'react'
import ExchangeRate from '../entities/ExchangeRate';
import { formatNumber } from '../utils/numberFormatter';

const API_KEY = "a006c5068c1fc1f67a719efe"
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export const useCurrency = (baseCurrency: string) => {
    const [rates, setRates] = useState<ExchangeRate>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);

                if (!response.ok) {
                    throw new Error('failed to fetch exchange rates');
                }

                const data = await response.json();

                if (data.result === 'success') {
                    setRates(data.conversion_rates);
                } else {
                    throw new Error(data.error || 'Error fetching exchange rates');
                }

            } catch (err) {
                setError(err instanceof Error ? err.message : ' an unknown error occured');
            }
        };
        fetchRates();
    }, [baseCurrency]);

    const convert = (amount: number, from: string, to: string): number => {
        // If the currencies are the same, return the amount (with proper decimal handling)
        if (from === to) return formatNumber(amount);
        
        // If we're converting from the base currency, it's a direct conversion
        if (from === baseCurrency) {
          const result = amount * (rates[to] || 0);
          return formatNumber(result);
        }
        
        // If we're converting to the base currency, it's an inverse conversion
        if (to === baseCurrency) {
          const result = amount / (rates[from] || 1);
          return formatNumber(result);
        }
        
        // If neither currency is the base, convert via the base currency
        const fromRate = rates[from] || 0;
        const toRate = rates[to] || 0;
        
        if (!fromRate || !toRate) return 0;
        
        const result = amount * (toRate / fromRate);
        return formatNumber(result);
      };

    return (
        {
            rates, error, convert
        }
    )
}

export default useCurrency