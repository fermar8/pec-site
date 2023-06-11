import { Box, Text, Heading, useMediaQuery } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPost = dynamic(() => import("./blogPost"), {
  ssr: false,
});

export default function CardBlog(props) {
  const {
    mainImageSrc,
    title,
    summary,
    authorImgSrc,
    author,
    date,
    timestamp,
    url,
  } = props.blogInfo;

  const [ timePassed, setTimePassed ] = useState("Loading...")

  useEffect(() => {
    setTimePassed(calculateTimePassed(timestamp));
  }, [timestamp]);

  const calculateTimePassed = (timestamp) => {
    const date = new Date(timestamp);
    const currentDate = new Date();

    const diff = Math.floor(currentDate.getTime() - date.getTime());
    const day = 1000 * 60 * 60 * 24;

    const days = Math.floor(diff/day);
    const months = Math.floor(days/31);
    const years = Math.floor(months/12);

    if (days < 1) {
      return "Hoy";
    } else if (days > 0 && months < 1) {
      const text = days === 1 ? "día" : "días";
      return `${days} ${text}`;
    } else if (months > 0 && years < 1) {
      const text = months === 1 ? "mes" : "meses";
      return `${months} ${text}`;
    } else {
      const text = years === 1 ? "año" : "años";
      return `${years} ${text}`;
    }
  };
  const opacityChange = (loaded) => {
    let opacity;
    opacity = loaded ? 1 : 0;
    return opacity;
  };

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );
  if (isMobile) {
    return (
      <Box
        h={[418, 346, null, null, null, null]}
        w={[320, 440, null, null, null, null]}
        display="flex"
        flexDirection="column"
        opacity={opacityChange(props.loaded)}
        transition="1s"
      >
        <Box
          w={[320, 320, null, null, null, null]}
          h={[146, 146, null, null, null, null]}
          mb={["16px", "16px", null, null, null, null]}
          position="relative"
          borderRadius="9px 9px 0px 0px"
        >
          <Image
            fill
            src={mainImageSrc}
            alt="home-image"
            placeholder="blur"
            blurDataURL="url"
          ></Image>
        </Box>
        <Box
          w={[280, 432, null, null, null, null]}
          mb={["16px", null, null, null, null, null]}
          ml={["8px", null, null, null, null, null]}
        >
          <Link href={url} prefetch={false}>
            <Heading as="h4" fontSize="18px">
              {title}
            </Heading>
          </Link>
        </Box>
        <Box
          w={[280, 432, null, null, null, null]}
          mb={["24px", null, null, null, null, null]}
          ml={["8px", null, null, null, null, null]}
          lineHeight="16px"
        >
          <Text fontSize="16px">{summary}</Text>
        </Box>
        <BlogPost selectedAuthor={author} imageSrc={authorImgSrc} date={date} timePassed={timePassed} />
      </Box>
    );
  } else if (isTablet) {
    return (
      <Box
        h={[null, null, 434, 418, null, null]}
        w={[null, null, 728, 952, null, null]}
        display="flex"
        flexDirection="column"
        opacity={opacityChange(props.loaded)}
        transition="1s"
      >
        <Box
          w={[null, null, 352, 464, null, null]}
          h={[null, null, 146, 146, null, null]}
          mb={[null, null, "32px", "32px", null, null]}
          position="relative"
          borderRadius="9px 9px 0px 0px"
        >
          <Image
            fill
            src={mainImageSrc}
            alt="home-image"
            placeholder="blur"
            blurDataURL="url"
          ></Image>
        </Box>
        <Box
          w={[null, null, 352, 464, null, null]}
          mb={[null, null, "16px", "16px", null, null]}
          lineHeight={[null, null, "16px", "16px", null, null]}
        >
          <Link href={url} prefetch={false}>
            <Heading
              as="h4"
              fontSize={[null, null, "18px", "18px", null, null]}
            >
              {title}
            </Heading>
          </Link>
        </Box>
        <Box
          w={[null, null, 352, 464, null, null]}
          h={[null, null, "64px", "64px", null, null]}
          mb={[null, null, "24px", "24px", null, null]}
          lineHeight={[null, null, "16px", "16px", null, null]}
        >
          <Text fontSize={[null, null, "18px", "18px", null, null]}>
            {summary}
          </Text>
        </Box>
        <BlogPost selectedAuthor={author} imageSrc={authorImgSrc} date={date} timePassed={timePassed} />
      </Box>
    );
  } else {
    return (
      <Box h="378px" w="359px" display="flex" flexDirection="column">
        <Box
          h="146px"
          w="359px"
          position="relative"
          borderRadius="9px 9px 0px 0px"
        >
          <Image
            fill
            src={mainImageSrc}
            alt="home-image"
            placeholder="blur"
            blurDataURL="url"
          ></Image>
        </Box>
        <Box h="32px"></Box>
        <Box h="32px">
          <Link href={url} prefetch={false}>
            <Heading
              as="h4"
              fontSize="18px"
              fontWeight="semibold"
              lineHeight="16px"
            >
              {title}
            </Heading>
          </Link>
        </Box>
        <Box h="16px"></Box>
        <Box h="64px">
          <Text lineHeight="16px">{summary}</Text>
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
            <Box
              w="48px"
              h="48px"
              display="flex"
              position="relative"
              borderRadius="50%"
            >
              <Image
                fill
                src={authorImgSrc}
                alt="home-image"
                placeholder="blur"
                blurDataURL="url"
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
                <p>{author}</p>
              </Box>
              <Box w="151px" color="brand.grey">
                <p>{date}</p>
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
              <Text>{timePassed}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
