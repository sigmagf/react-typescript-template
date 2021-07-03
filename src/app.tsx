import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '~/styles/global'
import { theme } from '~/styles/theme'

import { NotFoundErrorPage } from './pages/404'
import { HomePage } from './pages/Home'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<NotFoundErrorPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
