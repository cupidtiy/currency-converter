import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import CurrencyInput from './CurrencyInput'
import currencies from '../data/currencies'

const CurrencyConverter = () => {
    //state management
    const [amount, setAmount] = useState<number>(1);

    //event handlers
    const handleAmountChange = (valueAsString: string, _valueAsNumber: number) => {
        // Parse the string value to ensure decimal handling
        const parsedValue = parseFloat(valueAsString);
        setAmount(isNaN(parsedValue) ? 0 : parsedValue);
      };
    


    return (
        <>
            <CurrencyInput
                amount={amount}
                onChange={handleAmountChange} />
            <Text>  {currencies.map(currency => currency.code).join(', ')} </Text>
            <Text> currency result </Text>

        </>

    )
}

export default CurrencyConverter