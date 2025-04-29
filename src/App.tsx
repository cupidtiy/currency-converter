import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="brand.800" // Your pink color
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="0"
      padding="0"
    >
      <Container maxW={"container.md"}>
        <VStack spacing={3} align={'stretch'}>
          <Box
            py={5}
            px={5}
            backgroundColor={'white'}
            boxShadow={'xl'}
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
          >
            <Heading
              as='h1'
              size="xl"
              mb={2}
              color={'brand.900'}
              textAlign="center"
            >★ CURRENCY CONVERTER ★</Heading>
            <Text color="gray.600" textAlign="center">convert between currencies with real-time exchange rates</Text>
            <CurrencyConverter />

            <Box alignItems={"center"} fontSize={"sm"} marginTop={3}>
              <Text> Exchange rates provided by ExchangeRate-API</Text>
            </Box>
          </Box>


        </VStack>
      </Container>
    </Box>
  )
}

export default App