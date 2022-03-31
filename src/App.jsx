import { Button, Flex, Stack } from "@chakra-ui/react";

import { React, useState } from "react";

import RatingText from "./componentes/RatingText";
import Submit from "./componentes/Submit";
import ThankYou from "./componentes/ThankYou";

function App() {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
  };

  const [click, setClick] = useState(null);

  const handleClick = (i) => {
    if (click !== i) {
      setClick(false);
      setClick(i);
    } else if (click === i) {
      setClick(false);
    } else {
      setClick(i);
    }
  };

  return (
    <div className="App">
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Stack
          width={330}
          height={360}
          padding={6}
          spacing={4}
          borderRadius={15}
          bgGradient="linear(to-b, primary.400, hsl(213, 19%, 10%))"
        >
          {submit ? <ThankYou number={click} /> : 
            <>
              <RatingText />
              <Stack
                width="100%"
                height="4em"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {[...Array(5)].map((rating, i) => {
                  const numberRating = i + 1;

                  return (
                    <Button
                      key={i}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                      width="3em"
                      height="3em"
                      fontSize="15px"
                      backgroundColor={click === numberRating ? "primary.100" : "hsla(216, 12%, 40%, 0.1)"}
                      borderRadius="50%"
                      color={click === numberRating ? "white" : "primary.200"}
                      onClick={handleClick}
                    >
                      {numberRating}
                    </Button>
                  );
                })}
              </Stack>
              <Submit handleClick={handleSubmit} />
            </>
          }
        </Stack>
      </Flex>
    </div>
  );
}

export default App;
