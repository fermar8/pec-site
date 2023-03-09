import { Button } from "@chakra-ui/react";
import { WavingHand } from "../../icons";

function buttonContact() {
  return (
    <Button
      bg="brand.red"
      color="brand.white"
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
