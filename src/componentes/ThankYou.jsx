import { Heading, Image, Stack, Text } from "@chakra-ui/react";

import React from "react";

import ilustration from "../images/illustration-thank-you.svg";

const ThankYou = ({ number }) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={6} padding={4}>
      <Image src={ilustration} width="140px" />
      <Heading
        fontSize="md"
        fontWeight="400"
        color="orange.400"
        backgroundColor="hsla(216, 12%, 40%, 0.1)"
        paddingY={2}
        paddingX={4}
        borderRadius="full"
        letterSpacing="0.8px"
      >
        You selected {number} out of 5
      </Heading>
      <Stack textAlign="center" spacing={5}>
        <Heading
          fontSize="2xl"
          color="white"
          fontWeight="700"
          letterSpacing={1}
        >
          Thank you!
        </Heading>
        <Text fontSize="sm" color="primary.200">
          We appreciate you taking the time to give a rating. If your ever need
          more support, don't hesitate to get in touch!
        </Text>
      </Stack>
    </Stack>
  );
};

export default ThankYou;
