import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text } from '@chakra-ui/react'
import CurrencyConverter from './components/CurrencyConverter'

function App() {

  return (
    <>
      <CurrencyConverter/>
    </>
  )
}

export default App
