import { Box, BoxProps, Image, useBreakpointValue } from "@chakra-ui/react";
import styles from "../../theme/scss/about.module.scss";
import { getReadmeCardConfig } from "../../utils/getReadmeCardConfig";

import Container from "../Container";

interface AboutMeProps extends BoxProps {
  about: string;
};

function AboutMe({ about, ...rest }: AboutMeProps) {
  const isWideOrNormalVersion = useBreakpointValue({
    base: false,
    lg: true,
    xl: true,
    md: true
  });

  return (
    <Container withAccordion accordionTitle="Um pouco sobre mim" {...rest}>
      { isWideOrNormalVersion && <Image
        src="/static_banner.png"
        width="100%"
        maxH={500}
        mb={4}
      /> }
      <Box 
        whiteSpace="pre-wrap"
        mr={4}
        fontSize={[14, 16]}
        dangerouslySetInnerHTML={{ __html: about }}
        className={`${styles.container} ${!isWideOrNormalVersion? styles.mobile:""}`}
      />
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        h="max-content"
        flexWrap="wrap"
      >
        <Box
          ml={-4}
          mb={-5}
          w={280}
          minW={280}
          display="flex"
        >
          <Image
            w={280}
            h={[115, 150]}
            objectFit="cover"
            objectPosition="0% 0%"
            src={`https://github-readme-stats.vercel.app/api?username=l-marcel&show_icons=true&${getReadmeCardConfig()}`}
          />
        </Box>
        { isWideOrNormalVersion && <Box
          w={["100%", "65%"]}
          maxW={["100%", "100%", "calc(100% - 280px)"]}
          minW={["100%", "100%", 200]}
          bgRepeat="no-repeat"
          bgSize="contain"
          ml={[0, 0, 0, -4, -4]}
          mt={[-4, -6, 0]}
          mb={-5}
          h={[120, 150]}
          alt="langs" 
          bgImage={`https://github-readme-stats.vercel.app/api/top-langs/?username=l-marcel&${getReadmeCardConfig()}`}
        /> }
      </Box>
    </Container>
  );
};

export default AboutMe;