import { Box, Flex, VStack, useMediaQuery } from "@chakra-ui/react";
import CardBlog from "./blog/cardBlog";
import ButtonCarousel from "./blog/buttonCarousel";

import React, { useState, useEffect } from "react";

export default function blog() {
  const provBlogAuthors = [
    "Eudald Capellades",
    "Victor López",
    "Ferran Martínez",
    "Rarulicius",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedAuthor, setSelectedAuthor] = useState(provBlogAuthors[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewAuthor = (buttonIndex, provBlogAuthors) => {
    setLoaded(false);
    setTimeout(() => {
      setSelectedAuthor(provBlogAuthors[buttonIndex]);
      setSelectedIndex(buttonIndex);
      setLoaded(true);
    }, 500);
  };

  const selectButton = (buttonIndex) => {
    selectNewAuthor(buttonIndex, provBlogAuthors);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <Flex justify="center" alignItems="center" bg="brand.pureWhite">
        <VStack
          w={[320, 480, null, null, null, null]}
          h={[610, 578, null, null, null, null]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          spacing="0px"
        >
          <Box
            h={["40px", null, null, null, null, null]}
            w={[320, 440, null, null, null, null]}
            mb={["24px", null, null, null, null, null]}
            fontSize={["32px", null, null, null, null, null]}
            color="brand.red"
            fontWeight="semibold"
          >
            <h6>Blog</h6>
          </Box>
          <CardBlog
            loaded={loaded}
            onLoad={() => setLoaded(true)}
            selectedAuthor={selectedAuthor}
          />
          <Box
            w={[320, 440, null, null, null, null]}
            h={["24px", null, null, null, null, null]}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              mt={["16px", "16px", null, null, null, null]}
              w={["108px", "108px", null, null, null, null]}
              h={["24px", "24px", null, null, null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <ButtonCarousel selectButton={selectButton} index={0} />
              <ButtonCarousel selectButton={selectButton} index={1} />
              <ButtonCarousel selectButton={selectButton} index={2} />
              <ButtonCarousel selectButton={selectButton} index={3} />
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex justify="center" alignItems="center" bg="brand.pureWhite">
        <VStack
          w={[320, 280, 728, 952, 1128]}
          h="570px"
          display="flex"
          flexDirection="column"
          align="stretch"
          spacing="0px"
        >
          <Box h="64px"></Box>
          <Box h="40px" fontSize="32px" color="brand.red" fontWeight="semibold">
            <h6>Blog</h6>
          </Box>
          <Box h="24px"></Box>
          <Box h="378px" display="flex" justifyContent="space-between">
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </Box>
        </VStack>
      </Flex>
    );
  }
}
