import { Box, FormControl, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

interface Props {
    amount: number;
    onChange: (valueAsString: string, valueAsNumber: number) => void;
}

const CurrencyInput = ({ amount, onChange }: Props) => {
    const [inputValue, setInputValue] = useState<string>(amount.toString());
    const shouldClear = useRef<boolean>(false);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Only allow empty input, digits, and one decimal point
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            let newValue;

            //clear all if flagged
            if (shouldClear.current) {
                shouldClear.current = false;
                newValue = value.charAt(value.length - 1);
            } else {
                //continue keystrokes
                newValue = value;
            }

            //update state with new value
            setInputValue(newValue);

            const numericValue = newValue === '' ? 0 : parseFloat(newValue);
            if (!isNaN(numericValue)) {
                onChange(newValue, numericValue);
            }
        }
    };

    //if not focused, set clear flag
    const handleFocus = () => {
        shouldClear.current = true;
    }

    // Format the value on blur
    const handleBlur = () => {
        shouldClear.current = false;
        
        // if empty, resort to 0, if not then try to make it a valid numeric value
        const numericValue = inputValue === '' ? 0 : parseFloat(inputValue);
        const formatted = isNaN(numericValue) ? '0' : numericValue.toString();
        
        setInputValue(formatted);
        onChange(formatted, isNaN(numericValue) ? 0 : numericValue);
    };

    return (
        <FormControl>
            <FormLabel htmlFor="amount">Amount</FormLabel>
            <Box
            boxShadow="md"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            bg="white">
            <InputGroup>
                <Input
                     id="amount"
                     value={inputValue}
                     onChange={handleInputChange}
                     onFocus={handleFocus}
                     onBlur={handleBlur}
                     placeholder="0.00"
                     type="text"
                     inputMode="decimal"
                 />
            </InputGroup>
            </Box>
        </FormControl>
    );
};

export default CurrencyInput;
