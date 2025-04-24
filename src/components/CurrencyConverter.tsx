import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import CurrencyInput from './CurrencyInput'
import currencies from '../data/currencies'
import CurrencySelector from './CurrencySelector'

const CurrencyConverter = () => {
    //state management
    const [amount, setAmount] = useState<number>(1);
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('EUR');


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
    const handleSwapCurrencies = () =>{
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }



    return (
        <>
            <CurrencyInput
                amount={amount}
                onChange={handleAmountChange} />
            <CurrencySelector
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                onFromCurrencyChange={handleFromCurrencyChange}
                onToCurrencyChange={handleToCurrencyChange} 
                onSwapCurrencies={handleSwapCurrencies}/>
            <Text>  {currencies.map(currency => currency.code).join(', ')} </Text>
            <Text> currency result </Text>

        </>

    )
}

export default CurrencyConverter