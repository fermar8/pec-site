import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps = {} }) {
  const theme = extendTheme({
    colors: {
      brand: {
        red: "#F55951",
        white: "#FFFFFF",
        grey: "#D7D7D7",
        black: "#292929"
      },
    },
  })
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
