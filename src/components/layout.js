import dynamic from "next/dynamic";

import Navbar from "./navbar";
const Footer = dynamic(() => import("./footer"), {
  ssr: false,
});

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
      <div style={{ paddingTop: "56px" }}>{children}</div>
      <Footer />
    </>
  );
}
