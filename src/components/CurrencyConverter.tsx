import { Box, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import CurrencyInput from './CurrencyInput'
import CurrencySelector from './CurrencySelector'
import CurrencyResult from './CurrencyResult'
import useCurrency from '../hooks/useCurrency'

const CurrencyConverter = () => {
    //state management
    const [amount, setAmount] = useState<number>(1);
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [convertedAmount, setConvertedAmount] = useState<number>(0);

    const { error, convert, loading } = useCurrency('USD');

    useEffect(() => {
        if (!error && !loading) {
            const result = convert(amount, fromCurrency, toCurrency);
            setConvertedAmount(result);
        }
    }, [amount, fromCurrency, toCurrency, convert, error]);

    //event handlers
    const handleAmountChange = (valueAsString: string, _valueAsNumber: number) => {
        // Parse the string value to ensure decimal handling
        const parsedValue = parseFloat(valueAsString);
        setAmount(isNaN(parsedValue) ? 0 : parsedValue);
    };

    const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFromCurrency(e.target.value);
    }
    const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setToCurrency(e.target.value);
    }
    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }



    return (
        <>
            <Box
                borderRadius={'lg'}>


                <VStack spacing={6} align="stretch">

                    <CurrencyInput
                        amount={amount}
                        onChange={handleAmountChange} />
                    <CurrencySelector
                        fromCurrency={fromCurrency}
                        toCurrency={toCurrency}
                        onFromCurrencyChange={handleFromCurrencyChange}
                        onToCurrencyChange={handleToCurrencyChange}
                        onSwapCurrencies={handleSwapCurrencies} />
                    <CurrencyResult
                        inputAmount={amount}
                        convertedAmount={convertedAmount}
                        fromCurrency={fromCurrency}
                        toCurrency={toCurrency}
                        loading = {loading}
                    />
                </VStack>
            </Box>
        </>

    )
}

export default CurrencyConverter