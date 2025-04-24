import React from 'react'
import currencies from '../data/currencies';
import { Flex, FormControl, FormLabel, Select } from '@chakra-ui/react';

interface Props {
    fromCurrency: string;
    toCurrency: string;
    onFromCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onToCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


const CurrencySelector = ({ fromCurrency, toCurrency, onFromCurrencyChange, onToCurrencyChange }: Props) => {


    return (
        <Flex
            direction={{ base: 'column', md: 'row' }} gap={4} align='center'>
            <FormControl>
                <FormLabel htmlFor="fromCurrency"></FormLabel>
                <Select
                    id='fromCurrency'
                    value={fromCurrency}
                    onChange={onFromCurrencyChange}>

                    {currencies.map((currency) => (
                        <option
                            key={currency.code}
                            value={currency.code}>
                            {currency.code}-{currency.name}
                        </option>))}
                </Select>
            </FormControl> <FormControl>
                <FormLabel htmlFor="toCurrency"></FormLabel>
                <Select
                    id='toCurrency'
                    value={toCurrency}
                    onChange={onToCurrencyChange}>

                    {currencies.map((currency) => (
                        <option
                            key={currency.code}
                            value={currency.code}>
                            {currency.code}-{currency.name}
                        </option>))}
                </Select>
            </FormControl>


        </Flex >
    )
}

export default CurrencySelector