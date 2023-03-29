import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PostsContextProvider } from './contexts/PostsContext'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <PostsContextProvider>
          <Router />
        </PostsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
