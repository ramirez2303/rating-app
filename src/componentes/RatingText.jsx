import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

import star from "../images/icon-star.svg";
import React from "react";

const RatingText = () => {
  return (
    <Stack>
      <Flex
        width="fit-content"
        padding="0.8em"
        backgroundColor="hsla(216, 12%, 46%, 0.1)"
        borderRadius="50%"
      >
        <Image src={star} width={3.5} height={3.5} />
      </Flex>
      <Stack spacing={4}>
        <Heading
          fontFamily="'Overpass', sans-serif"
          fontWeight="400"
          fontSize="2xl"
          color="white"
          letterSpacing={0.5}
        >
          How did we do?
        </Heading>
        <Text color="primary.200" fontSize="0.9em" fontWeight="400">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Text>
      </Stack>
    </Stack>
  );
};

export default RatingText;
