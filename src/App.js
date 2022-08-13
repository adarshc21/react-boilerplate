import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/GlobalStyle'

const theme = {
  // add theme here
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    
    <>
    </>
    
    </ThemeProvider>
  )
}
