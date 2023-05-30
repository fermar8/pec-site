import { Button } from "@chakra-ui/react";
import { WavingHand } from "../../icons";
import Link from "next/link";

function buttonContactWithUs({ buttonText }) {
  return (
    <Link href="#contacto" passHref prefetch={false}>
      <Button
        bg="brand.main"
        color="brand.whiteBackground"
        mb={["32px", "32px", "32px", "32px", "32px", null]}
        w={[204, 204, 204, 204, 204, null]}
        h={["32px", "32px", "32px", "32px", "32px", null]}
        fontSize={["14px", "14px", "14px", "14px", "14px", null]}
        fontWeight="light"
        verticalAlign="text-bottom"
        borderRadius="999px"
        rightIcon={<WavingHand />}
        alignSelf="center"
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
        {buttonText}
      </Button>
    </Link>
  );
}

export default buttonContactWithUs;
