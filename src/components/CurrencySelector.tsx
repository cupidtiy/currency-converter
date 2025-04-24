import React from 'react'
import currencies from '../data/currencies';
import { FaExchangeAlt } from 'react-icons/fa';
import { Flex, FormControl, FormLabel, IconButton, Select } from '@chakra-ui/react';

interface Props {
    fromCurrency: string;
    toCurrency: string;
    onFromCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onToCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onSwapCurrencies: () => void;
    
}


const CurrencySelector = ({ fromCurrency, toCurrency, onFromCurrencyChange, onToCurrencyChange, onSwapCurrencies }: Props) => {


    return (
        <Flex direction={{ base: 'column', md: 'row' }} gap={4} align="center">
          <FormControl>
            <FormLabel htmlFor="fromCurrency"></FormLabel>
            <Select
              id="fromCurrency"
              value={fromCurrency}
              onChange={onFromCurrencyChange}
              border="1px solid"
              borderColor="gray.300"
              boxShadow="md"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </Select>
          </FormControl>
      
          <IconButton
            aria-label="swap currencies"
            icon={<FaExchangeAlt />}
            alignSelf={{ base: 'center', md: 'flex-end' }}
            mb={{ base: 0, md: '' }}
            size="md"
            onClick={onSwapCurrencies}
            border="1px solid"
            borderColor="gray.300"
            boxShadow="md"
            isRound
          />
      
          <FormControl>
            <FormLabel htmlFor="toCurrency"></FormLabel>
            <Select
              id="toCurrency"
              value={toCurrency}
              onChange={onToCurrencyChange}
              border="1px solid"
              borderColor="gray.300"
              boxShadow="md"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </Flex>
      );
      
}

export default CurrencySelector