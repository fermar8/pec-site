import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function CardService(props) {
  const { title, text, image, link} = props;
  
  const [imageUrl, setImageUrl] = useState(
    `${process.env.basePath}/img/home/home-web.png`
  );
  const [imageAlt, setImageAlt] = useState(`home-default`);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );

  useEffect(() => {
    setImageUrl(`${process.env.basePath}/img/home/home-${image}.svg`);
    setImageAlt(`home-${image}`);
  }, [image]);

  if (isMobile) {
    return (
      <>
        <Box backgroundColor="brand.warmBackground" border="1px solid #FFE2DC" borderRadius="9px">
          <Box
            w={[320, 440, null, null, null, null]}
            h={[200, null, null, null, null, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            border="1px"
            borderColor="brand.grey"
            borderRadius="9px"
            alignItems="center"
            bg="brand.grey"
          >
            <Box mt={["20px", "24px", null, null, null, null]}>
              <Image src={imageUrl} height={30} width={30} alt={imageAlt}/>
            </Box>
            <Box
              mt={["8px", "8px", null, null, null, null]}
              mb={["8px", "8px", null, null, null, null]}
              h={["16px", "16px", null, null, null, null]}
              display="flex"
              justifyContent="center"
              fontSize={["16px", "16px", null, null, null, null]}
              fontWeight="bold"
            >
              <Heading
                fontSize={["16px", "16px", null, null, null, null]}
                as="h4"
              >
                {title}
              </Heading>
            </Box>
            <Box
              w={[null, null, null, null, 280, null]}
              textAlign="center"
              lineHeight="16px"
            >
              <Text>{text}</Text>
            </Box>

            <Box
              h={["44px", "44px", null, null, null, null]}
              fontSize={["14px", "14px", null, null, null, null]}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              fontWeight="medium"
              color="brand.main"
              textDecoration="underline"
            >
              <Link href={`${link}`}>Ver servicios de {title}</Link>
            </Box>
          </Box>
        </Box>
      </>
    );
  } else if (isTablet) {
    return (
      <Box
        w={[null, null, 360, 472, null, null]}
        h={[null, null, 326, 326, null, null]}
        display="flex"
        flexDirection="column"
        border="1px"
        borderColor="brand.border"
        borderRadius="9px"
      >
        <Box
          w={[null, null, 360, 472, null, null]}
          h={[null, null, 146, 146, null, null]}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            w={[null, null, 360, 472, null, null]}
            h={[null, null, 146, 146, null, null]}
            display="flex"
            justifyContent="center"
            position="relative"
            borderRadiusTop="999"
          >
            <Image src={imageUrl} height={60} width={60} alt={imageAlt}/>
          </Box>
        </Box>
        <Box
          h={[null, null, "48px", "48px", null, null]}
          bg="brand.grey"
          borderTop="1px"
          borderColor="brand.border"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            h={[null, null, "16px", "16px", null, null]}
            display="flex"
            justifyContent="center"
            fontWeight="bold"
          >
            <Heading
              as="h4"
              fontSize={[null, null, "16px", "16px", null, null]}
            >
              {title}
            </Heading>
          </Box>
        </Box>
        <Box
          h={[null, null, 148, 148, null, null]}
          bg="brand.grey"
          borderBottomRadius="9px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            h={[null, null, "72px", "48px", null, null]}
            w={[null, null, 280, 392, null, null]}
            textAlign="center"
            lineHeight={[null, null, "16px", "16px", null, null]}
          >
            <Text>{text}</Text>
          </Box>
          <Box
            h={[null, null, "44px", "44px", null, null]}
            fontSize={[null, null, "14px", "14px", null, null]}
            color="brand.main"
            textDecoration="underline"
            display="flex"
            justifyContent="center"
          >
            <Link href={`${link}`}>Ver servicios de {title}</Link>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        w={[null, null, null, null, 360, null]}
        h={[null, null, null, null, 326, null]}
        display="flex"
        flexDirection="column"
        border="1px"
        borderColor="brand.border"
        borderRadius="9px"
      >
        <Box
          w={[null, null, null, null, 360, null]}
          h={[null, null, null, null, 146, null]}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          borderColor="brand.border"
          borderRadius="9px 9px 0 0"
          position="relative"
        >
          <Image src={imageUrl} height={60} width={60} alt={imageAlt}/>
        </Box>
        <Box
          h={[null, null, null, null, "180px", null]}
          bg="brand.grey"
          borderTop="1px"
          borderColor="brand.border"
          borderRadius="0 0 9px 9px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box display="flex" justifyContent="center" fontWeight="bold">
            <Heading as="h4" fontSize={[null, null, null, null, "16px", null]}>
              {title}
            </Heading>
          </Box>
          <Box
            w={[null, null, null, null, 280, null]}
            textAlign="center"
            lineHeight="16px"
          >
            <Text>{text}</Text>
          </Box>
          <Box
            fontSize={[null, null, null, null, "14px", null]}
            display="flex"
            justifyContent="center"
            color="brand.main"
            textDecoration="underline"
          >
            <Link href={`${link}`}>Ver servicios de {title}</Link>
          </Box>
        </Box>
      </Box>
    );
  }
}
