import { Button } from "@chakra-ui/react";
import { WavingHand } from "../../icons";

function buttonContactWithUs({ buttonText }) {
  return (
    <Button
      bg="brand.red"
      color="brand.white"
      mb={["32px", "32px", "32px", "32px", "32px", null]}
      w={[204, 204, 204, 204, 204, null]}
      h={["32px", "32px", "32px", "32px", "32px", null]}
      fontSize={["14px", "14px", "14px", "14px", "14px", null]}
      verticalAlign="text-bottom"
      borderRadius="999px"
      rightIcon={<WavingHand />}
      alignSelf="center"
    >
      {buttonText}
    </Button>
  );
}

export default buttonContactWithUs;
