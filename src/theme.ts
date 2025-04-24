import { extendTheme } from '@chakra-ui/react'

import starBimFont from './assets/fonts/Starbim.otf';

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
    heading: 'Starbim,Inter, system-ui',
    body: 'Inter, system-ui, sans-serif',
  },
  styles: {
    global: {
        '@font-face': {
        fontFamily: 'Starbim',
        src: `url(${starBimFont}) format('opentype')`,
        fontWeight: 'normal',
        fontStyle: 'normal',
        
      },
      body: {
        bg: 'brand.800',
        color: 'gray.800', // <-- makes all text readable
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'xs',
      },
      variants: {
        solid: {
          bg: 'brand.600',
          color: 'white',
          _hover: {
            bg: 'brand.800',
          },
        },
      },
    },
  },
})

export default theme
