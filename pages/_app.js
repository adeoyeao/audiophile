import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../theme'
import { Ribbons } from '../components'
import Store from '../store'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Manrope;
    line-height: 150%;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  button {
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Store>
      <ThemeProvider theme={theme}>
        <Ribbons>
          <Component {...pageProps} ></Component>
        </Ribbons>
      </ThemeProvider>
      </Store>
    </>
  )
}

export default App