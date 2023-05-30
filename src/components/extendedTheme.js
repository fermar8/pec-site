import { extendTheme } from "@chakra-ui/react";

import { Inter } from "next/font/google";

const inter = Inter({ weight: "400", subsets: ["latin"] });

const fonts = {
  heading: inter.style.fontFamily,
  body: inter.style.fontFamily,
};

const theme = extendTheme({
    colors: {
      brand: {
        main: "#F55951",
        border: "#FFE2DC",
        whiteBackground: "#ffffff",
        warmBackground: "#fff9f4",
        text: "#292929",
        cardBackground: "#E5E5E5",
        grey: "#808080",
        buttonHover: "#CE352D",
        buttonActive: "#930C05",
      },
    },
    fonts,
});
  
export default theme;