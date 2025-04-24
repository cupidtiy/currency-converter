import { Box, Flex, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';
import React from 'react'


interface Props {
    inputAmount: number;
    convertedAmount: number;
    fromCurrency: string;
    toCurrency: string;
}

const CurrencyResult = ({ inputAmount, convertedAmount, fromCurrency, toCurrency }: Props) => {
    return (
        <Box
            mt={4}
            borderWidth={"1px"}
            borderRadius={"md"}
            borderColor={"gray.300"}
            boxShadow={"md"}
            p={4}
        >
            <Stat>
                <StatLabel fontSize={"md"} textAlign={"left"}> Conversion result</StatLabel>
                <Flex alignItems="baseline" mt={2}>
                    <Text mr={2} fontSize={"l"}> {inputAmount} {fromCurrency} = </Text>
                    <StatNumber> {convertedAmount.toFixed(2)} {toCurrency}</StatNumber>
                </Flex>
            </Stat>
        </Box>
    );
}

export default CurrencyResult