import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../theme'
import { Ribbons } from '../components'

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

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Ribbons>
          <Component {...pageProps} ></Component>
        </Ribbons>
      </ThemeProvider>
    </>
  )
}
