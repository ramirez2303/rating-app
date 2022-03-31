import { Button } from "@chakra-ui/react";

import React from "react";
import { useState } from "react";

const Submit = ({ handleClick }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Button
      backgroundColor={hover ? "white" : "primary.100"}
      color={hover ? "primary.100" : "white"}
      borderRadius="25px"
      height="48px"
      letterSpacing={3}
      fontWeight="700"
      fontSize="14px"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      SUBMIT
    </Button>
  );
};

export default Submit;
