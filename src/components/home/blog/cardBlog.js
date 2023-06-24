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

  const [timePassed, setTimePassed] = useState("Loading...");

  useEffect(() => {
    setTimePassed(calculateTimePassed(timestamp));
  }, [timestamp]);

  const calculateTimePassed = (timestamp) => {
    const date = new Date(timestamp);
    const currentDate = new Date();

    const diff = Math.floor(currentDate.getTime() - date.getTime());
    const day = 1000 * 60 * 60 * 24;

    const days = Math.floor(diff / day);
    const months = Math.floor(days / 31);
    const years = Math.floor(months / 12);

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
          w={[320, 440, null, null, null, null]}
          h={[240.5, 331, null, null, null, null]}
          mb={["16px", "16px", null, null, null, null]}
          position="relative"
          borderRadius="9px 9px 0px 0px"
          overflow="hidden"
        >
          <Image
            fill
            src={mainImageSrc}
            alt="blog-image"
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
        <BlogPost
          selectedAuthor={author}
          imageSrc={authorImgSrc}
          date={date}
          timePassed={timePassed}
        />
      </Box>
    );
  } else if (isTablet) {
    return (
      <Box
        h={[null, null, 434, null, null, null]}
        w={[null, null, 720, null, null, null]}
        display="flex"
        flexDirection="column"
        alignItems={props.isFirstPost ? "center" : "null"}
        opacity={opacityChange(props.loaded)}
        transition="1s"
      >
        <Box
          w={props.isFirstPost ? "680px" : "352px"}
          h={props.isFirstPost ? "286px" : "180px"}
          mb={[null, null, "32px", "32px", null, null]}
          position="relative"
          borderRadius="9px 9px 0px 0px"
          overflow="hidden"
        >
          <Image
            fill
            src={mainImageSrc}
            alt="blog-image"
            placeholder="blur"
            blurDataURL="url"
          ></Image>
        </Box>
        <Box
          w={props.isFirstPost ? "680px" : "352px"}
          minHeight={props.isFirstPost ? null : "60px"}
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
          w={props.isFirstPost ? "680px" : "352px"}
          h={[null, null, "64px", "64px", null, null]}
          mb={[null, null, "24px", "24px", null, null]}
          lineHeight={[null, null, "16px", "16px", null, null]}
        >
          <Text fontSize={[null, null, "18px", "18px", null, null]}>
            {summary}
          </Text>
        </Box>
        <BlogPost
          selectedAuthor={author}
          imageSrc={authorImgSrc}
          date={date}
          timePassed={timePassed}
          isFirstPost={props.isFirstPost}
        />
      </Box>
    );
  } else {
    return (
      <Box
        w={[null, null, null, null, 1128, null]}
        display="flex"
        flexDirection="column"
        alignItems={props.isFirstPost ? "center" : "null"}
        opacity={opacityChange(props.loaded)}
        transition="1s"
      >
        <Box
          w={props.isFirstPost ? "1100px" : "352px"}
          h={props.isFirstPost ? "360px" : "240px"}
          mb={[null, null, "32px", "32px", null, null]}
          position="relative"
          borderRadius="9px 9px 0px 0px"
          overflow="hidden"
        >
          <Image
            fill
            src={mainImageSrc}
            alt="blog-image"
            placeholder="blur"
            blurDataURL="url"
          ></Image>
        </Box>
        <Box
          w={props.isFirstPost ? "1100px" : "352px"}
          minHeight={props.isFirstPost ? null : "60px"}
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
          w={props.isFirstPost ? "1100px" : "352px"}
          h={[null, null, "64px", "64px", null, null]}
          mb={[null, null, "24px", "24px", null, null]}
          lineHeight={[null, null, "16px", "16px", null, null]}
        >
          <Text fontSize={[null, null, "18px", "18px", null, null]}>
            {summary}
          </Text>
        </Box>
        <BlogPost
          selectedAuthor={author}
          imageSrc={authorImgSrc}
          date={date}
          timePassed={timePassed}
          isFirstPost={props.isFirstPost}
        />
      </Box>
    );
  }
}
