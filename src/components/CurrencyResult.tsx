import { Box, Flex, Spinner, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';


interface Props {
    inputAmount: number;
    convertedAmount: number;
    fromCurrency: string;
    toCurrency: string;
    loading: boolean;
    getSymbol: (key: string) => string;

}

const CurrencyResult = ({
    inputAmount,
    convertedAmount,
    fromCurrency,
    toCurrency,
    loading,
    getSymbol }: Props) => {
    return (
        <Box
            mt={4}
            borderWidth={"1px"}
            borderRadius={"md"}
            borderColor={"gray.300"}
            boxShadow={"md"}
            p={4}
        >
            {loading ? (
                <Flex>
                    <Spinner size="xl" ></Spinner>
                </Flex>
            ) : (
                <Stat>
                    <StatLabel fontSize={"md"} textAlign={"left"}> Conversion result</StatLabel>
                    <Flex alignItems="baseline" mt={2}>
                        <Text mr={2} fontSize={"l"}> {inputAmount} {fromCurrency} = </Text>
                        <StatNumber> {getSymbol(toCurrency)}{convertedAmount.toFixed(2)} {toCurrency}</StatNumber>
                    </Flex>
                </Stat>)

            }
        </Box >
    );
}

export default CurrencyResult