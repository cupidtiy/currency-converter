import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'

function App() {

  return (
    <>
      <Box
        py={5}
        px={5}
        backgroundColor={'brand.50'}
        boxShadow={'xl'}>
        <Container maxW={"container.md"}>
          <VStack spacing={3} align={'stretch'}>
            <Heading
              as='h1'
              size="xl"
              mb={2}
            > Currency Converter</Heading>
            <Text color="gray.600"> convert between currencies with real-time exchange rates</Text>
            <CurrencyConverter />
          </VStack>
        </Container>

      </Box>
    </>
  )
}

export default App
