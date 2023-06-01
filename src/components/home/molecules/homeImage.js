import Image from "next/image";
import { Box } from "@chakra-ui/layout";

export default function homeImage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      height="154px"
      mb="8px"
    >
      <Image
        width={154}
        height={154}
        src={`${process.env.basePath}/img/digital-workplace.webp`}
        alt="Trabajadores ON LINE Marketing Digital"
        placeholder="blur"
        blurDataURL="url"
        priority={true}
      ></Image>
    </Box>
  );
}
