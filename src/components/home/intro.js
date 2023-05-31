import { useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const DesktopHomeIntro = dynamic(
  () => import("components/desktop/home/intro"),
  {
    ssr: false,
  }
);

const MobileHomeIntro = dynamic(() => import("components/mobile/home/intro"), {
  ssr: false,
});

export default function Intro(props) {
  const [isMobileOrTablet] = useMediaQuery("(max-width: 1280px)");
  const { title, subtitle, text, buttonText } = props;

  return isMobileOrTablet ? (
    <MobileHomeIntro
      title={title}
      subtitle={subtitle}
      text={text}
      buttonText={buttonText}
    />
  ) : (
    <DesktopHomeIntro
      title={title}
      subtitle={subtitle}
      text={text}
      buttonText={buttonText}
    />
  );
}
