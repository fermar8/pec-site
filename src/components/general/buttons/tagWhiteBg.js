import { Tag } from "@chakra-ui/react";

export default function tagsWhiteBg({ tagText }) {
  return (
    <Tag
      bg="brand.whiteBackground"
      color="brand.main"
      maxW={["140px", null, null, null, null, null]}
      h={["30px", null, null, null, null, null]}
      fontSize="14px"
      fontWeight="bold"
      textAlign="center"
      border="1px"
      mr="8px"
      mb="8px"
      borderColor="brand.main"
      borderRadius="999"
    >
      {tagText}
    </Tag>
  );
}
