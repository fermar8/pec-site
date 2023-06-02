import { chakra, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CardService(props) {
  const { title, text, image, link } = props;

  const [imageUrl, setImageUrl] = useState(
    `${process.env.basePath}/img/home/home-web.svg`
  );
  const [imageAlt, setImageAlt] = useState(`home-default`);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );

  useEffect(() => {
    setImageUrl(`${process.env.basePath}/img/home/home-${image}.svg`);
    setImageAlt(`logo-servicio-${image}`);
  }, [image]);

  if (isMobile) {
    return (
      <>
        <chakra.div
          backgroundColor="brand.warmBackground"
          border="1px solid #FFE2DC"
          borderRadius="9px"
          mb="16px"
        >
          <chakra.div
            w={[320, 440, null, null, null, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            border="1px"
            borderColor="brand.grey"
            borderRadius="9px"
            alignItems="center"
          >
            <chakra.div
              mt={["20px", "24px", null, null, null, null]}
              width="30px"
              height="30px"
            >
              <Image src={imageUrl} height={30} width={30} alt={imageAlt} />
            </chakra.div>
            <chakra.div
              mt={["8px", "8px", null, null, null, null]}
              mb={["8px", "8px", null, null, null, null]}
              display="flex"
              justifyContent="center"
              fontSize={["18px", "18px", null, null, null, null]}
              fontWeight="bold"
            >
              <h4>{title}</h4>
            </chakra.div>
            <chakra.div
              w={[null, null, null, null, 280, null]}
              textAlign="center"
              lineHeight="16px"
              pl="4px"
              pr="4px"
            >
              <p>{text}</p>
            </chakra.div>

            <chakra.div
              h={["44px", "44px", null, null, null, null]}
              fontSize={["14px", "14px", null, null, null, null]}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              fontWeight="medium"
              color="brand.main"
              textDecoration="underline"
            >
              <Link href={`${link}`} prefetch={false}>
                Ver servicios de {title}
              </Link>
            </chakra.div>
          </chakra.div>
        </chakra.div>
      </>
    );
  } else if (isTablet) {
    return (
      <chakra.div
        w={[null, null, 360, 472, null, null]}
        h={[null, null, 326, 326, null, null]}
        display="flex"
        flexDirection="column"
        border="1px"
        borderColor="brand.border"
        borderRadius="9px"
      >
        <chakra.div
          w={[null, null, 360, 472, null, null]}
          h={[null, null, 146, 146, null, null]}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <chakra.div
            w={[null, null, 360, 472, null, null]}
            h={[null, null, 146, 146, null, null]}
            display="flex"
            justifyContent="center"
            position="relative"
            borderRadiusTop="999"
          >
            <Image
              src={imageUrl}
              height={60}
              width={60}
              alt={imageAlt}
              placeholder="blur"
              blurDataURL="url"
            />
          </chakra.div>
        </chakra.div>
        <chakra.div
          h={[null, null, "48px", "48px", null, null]}
          bg="brand.whiteBackground"
          borderTop="1px"
          borderColor="brand.border"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <chakra.div
            h={[null, null, "16px", "16px", null, null]}
            display="flex"
            justifyContent="center"
            fontWeight="bold"
            fontSize="18px"
          >
            <h4>{title}</h4>
          </chakra.div>
        </chakra.div>
        <chakra.div
          h={[null, null, 148, 148, null, null]}
          bg="brand.whiteBackground"
          borderBottomRadius="9px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <chakra.div
            h={[null, null, "72px", "48px", null, null]}
            w={[null, null, 280, 392, null, null]}
            textAlign="center"
            lineHeight="100%"
          >
            <p>{text}</p>
          </chakra.div>
          <chakra.div
            h={[null, null, "44px", "44px", null, null]}
            fontSize={[null, null, "14px", "14px", null, null]}
            color="brand.main"
            textDecoration="underline"
            display="flex"
            justifyContent="center"
          >
            <Link href={`${link}`} prefetch={false}>
              Ver servicios de {title}
            </Link>
          </chakra.div>
        </chakra.div>
      </chakra.div>
    );
  } else {
    return (
      <chakra.div
        w={[null, null, null, null, 360, null]}
        h={[null, null, null, null, 326, null]}
        display="flex"
        flexDirection="column"
        border="1px"
        borderColor="brand.border"
        borderRadius="9px"
      >
        <chakra.div
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
          <Image
            src={imageUrl}
            height={60}
            width={60}
            alt={imageAlt}
            placeholder="blur"
            blurDataURL="url"
          />
        </chakra.div>
        <chakra.div
          h={[null, null, null, null, "180px", null]}
          bg="brand.whiteBackground"
          borderTop="1px"
          borderColor="brand.border"
          borderRadius="0 0 9px 9px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <chakra.div display="flex" justifyContent="center" fontWeight="bold">
            <h4 style={{ fontSize: "18px" }}>{title}</h4>
          </chakra.div>
          <chakra.div
            w={[null, null, null, null, 280, null]}
            textAlign="center"
            lineHeight="16px"
          >
            <p>{text}</p>
          </chakra.div>
          <chakra.div
            fontSize={[null, null, null, null, "14px", null]}
            display="flex"
            justifyContent="center"
            color="brand.main"
            textDecoration="underline"
          >
            <Link href={`${link}`} prefetch={false}>
              Ver servicios de {title}
            </Link>
          </chakra.div>
        </chakra.div>
      </chakra.div>
    );
  }
}
