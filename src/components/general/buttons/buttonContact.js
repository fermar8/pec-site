import { Button } from "@chakra-ui/react";
import { WavingHand } from "../../icons";

function buttonContact() {
  return (
    <Button
      bg="brand.main"
      color="brand.whiteBackground"
      w="168px"
      h="36px"
      verticalAlign="text-bottom"
      borderRadius="999"
      rightIcon={<WavingHand />}
    >
      Contacta
    </Button>
  );
}

export default buttonContact;
