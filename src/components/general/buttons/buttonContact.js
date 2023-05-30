import { Button } from "@chakra-ui/react";
import { WavingHand } from "../../icons";
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
        rightIcon={<WavingHand />}
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
