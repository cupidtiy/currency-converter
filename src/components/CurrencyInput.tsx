import { FormControl, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface Props {
  amount: number;
  onChange: (valueAsString: string, valueAsNumber: number) => void;
}

const CurrencyInput = ({ amount, onChange }: Props) => {
  const [inputValue, setInputValue] = useState<string>(amount.toString());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Only allow empty input, digits, and one decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInputValue(value);
      const numericValue = value === '' ? 0 : parseFloat(value);
      if (!isNaN(numericValue)) {
        onChange(value, numericValue);
      }
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor="amount">Amount</FormLabel>
      <InputGroup>
        <Input
          id="amount"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="0.00"
          type="text"
          inputMode="decimal"
        />
      </InputGroup>
    </FormControl>
  );
};

export default CurrencyInput;
