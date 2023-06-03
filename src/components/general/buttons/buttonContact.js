import { Button, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function buttonContact() {
  return (
    <Link href="#contacto" passHref prefetch={false}>
      <Button
        bg="brand.main"
        color="brand.whiteBackground"
        w="168px"
        h="36px"
        fontWeight="light"
        verticalAlign="text-bottom"
        borderRadius="999"
        rightIcon={
          <Image
            height={24}
            width={24}
            src={`${process.env.basePath}/img/social-media/wavingHand.svg`}
            alt="wavingHand-icon"
            priority={true}
          ></Image>
        }
        sx={{
          ":hover": {
            bg: "brand.buttonHover",
          },
          ":focus": {
            bg: "brand.main",
            border: "1px solid white",
          },
          ":active": {
            bg: "brand.buttonActive",
            outline: "brand.whiteBackground",
          },
          ":after": {
            bg: "brand.buttonActive",
            outline: "brand.whiteBackground",
          },
        }}
      >
        Contacta
      </Button>
    </Link>
  );
}

export default buttonContact;
