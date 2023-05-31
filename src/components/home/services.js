import { useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import CardService from "./services/cardService";
const ButtonContactWithUs = dynamic(
  () => import("../../components/general/buttons/buttonContactWithUs"),
  { ssr: false }
);
const MobileServicesHome = dynamic(
  () => import("../../components/mobile/home/services"),
  { ssr: false }
);
const TabletServicesHome = dynamic(
  () => import("../../components/tablet/home/services"),
  { ssr: false }
);
const DesktopServicesHome = dynamic(
  () => import("../../components/desktop/home/services"),
  { ssr: false }
);

export default function Services(props) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );
  return isMobile ? (
    <MobileServicesHome props={props}/>
  ) : isTablet ? (
    <TabletServicesHome props={props}/>
  ) : (
    <DesktopServicesHome props={props}/>
  );
}
