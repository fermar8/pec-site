import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("./footer"), {
  ssr: false,
});

import { Box } from "@chakra-ui/react";

export default function Layout({
  children,
  isHome,
  isService,
  serviceType,
  isAbout,
  isBlog,
}) {
  return (
    <>
      <Navbar
        isHome={isHome}
        isService={isService}
        serviceType={serviceType}
        isAbout={isAbout}
        isBlog={isBlog}
      />
      <Box paddingTop="56px">{children}</Box>
      <Footer />
    </>
  );
}
