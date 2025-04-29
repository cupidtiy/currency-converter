import { Box, Container, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  // Create responsive heading content with JSX to control the layout
  const headingContent = useBreakpointValue({
    base: (
      <>
        CURRENCY CONVERTER
        <Text as="div" mt={-1}>
          a
        </Text>
      </>
    ), 
    md: "a CURRENCY CONVERTER a" // Desktop version (original)
  });

  // You can also adjust sizes and other properties responsively
  const headingSize = useBreakpointValue({ base: "lg", md: "xl" });
  const containerPadding = useBreakpointValue({ base: 3, md: 5 });

  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="brand.800"
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="0"
      padding="0"
    >
      <Container maxW={"container.md"}>
        <VStack spacing={3} align={'stretch'}>
          <Box
            py={containerPadding}
            px={containerPadding}
            backgroundColor={'white'}
            boxShadow={'xl'}
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
          >
            <Heading
              as='h1'
              size={headingSize}
              mb={2}
              color={'brand.900'}
              textAlign="center"
            >
              {headingContent}
            </Heading>
            <Text 
              color="gray.600" 
              textAlign="center"
              fontSize={useBreakpointValue({ base: "sm", md: "md" })}
            >
              convert between currencies with real-time exchange rates
            </Text>
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