import Navbar from "./navbar";
import { Box } from "@chakra-ui/react";

export default function Layout({ children, isHome, isService, isAbout, isBlog }) {
  return (
    <>
      <Navbar isHome={isHome} isService={isService} isAbout={isAbout} isBlog={isBlog} />
      <Box paddingTop="56px">{children}</Box>
    </>
  );
}
