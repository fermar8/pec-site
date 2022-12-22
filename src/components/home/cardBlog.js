import { Box, Image} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

export default function cardBlog() {
  return (
    <Box h="378px" w="359px" display="flex" flexDirection="column">
            <Box h="146px" w="359">
              <Image
                w="359px"
                h="146px"
                src="img/Placeholder1128x280.jpg"
                alt="home-image"
                borderRadius="9px 9px 0px 0px"
              ></Image>
            </Box>
            <Box h="32px"></Box>
            <Box
              h="32px"
              fontSize="18px"
              fontWeight="semibold"
              lineHeight="16px"
            >
              <h6>Trabajo y salud mental, un delicado equilibrio</h6>
            </Box>
            <Box h="16px"></Box>
            <Box h="64px" lineHeight="16px">
              <p>
                El trabajo es algo que nos ocupa mucho tiempo de nuestra vida, y
                a veces el equilibrio entre salud mental y trabajo no es fácil.
              </p>
            </Box>
            <Box h="24px"></Box>
            <Box
              h="64px"
              w="360px"
              display="flex"
              alignItems="center"
              borderTop="1px"
              borderBottom="1px"
              borderColor="brand.grey"
            >
              <Box w="16px"></Box>
              <Box w="215px" h="48px" display="flex">
                <Box w="48px" h="48px" display="flex">
                  <Image
                    w="48px"
                    h="48px"
                    src="img/Placeholder1128x280.jpg"
                    alt="home-image"
                    borderRadius="50%"
                  ></Image>
                </Box>
                <Box w="16px"></Box>
                <Box
                  w="151px"
                  display="flex"
                  flexDirection="column"
                  fontSize="14px"
                  fontWeight="light"
                >
                  <Box w="151px">
                    <p>Eudald Capellades</p>
                  </Box>
                  <Box w="151px" color="brand.grey">
                    <p>16 de desembre 2022</p>
                  </Box>
                </Box>
              </Box>
              <Box w="38px"></Box>
              <Box
                w="70px"
                h="24px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <TimeIcon />
                <Box fontSize="14px" fontWeight="light">
                  <p>3 min</p>
                </Box>
              </Box>
          </Box>
          </Box>
  )
}