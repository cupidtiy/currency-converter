import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#FFF1F4',
      100: '#FDE0E7',
      200: '#FBCED9',
      300: '#F9BDCB',
      400: '#F6ABBD',
      500: '#EFC3CA',
      600: '#DAABB5',
      700: '#D49BA7',
      800: '#C98895',
      900: '#B66878',
    },
  },
  fonts: {
    heading: 'Inter, system-ui, Chewy-Bubble',
    body: 'Inter, system-ui, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800', // <-- makes all text readable
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
      },
    },
  },
})

export default theme
