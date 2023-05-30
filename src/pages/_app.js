import dynamic from "next/dynamic";
const ChakraProvider = dynamic(() => import("@chakra-ui/provider").then(
        (mod) => mod.ChakraProvider), { ssr: false }
);

import extendedTheme from "../components/extendedTheme";

function MyApp({ Component, pageProps = {} }) {
  return (
    <ChakraProvider theme={extendedTheme} cssVarsRoot="#__next">
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
