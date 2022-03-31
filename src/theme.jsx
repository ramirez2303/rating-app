import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "'Overpass', sans-serif",
        backgroundColor: "hsl(216, 12%, 8%)",
        fontSize: "15px"
      },
    },
  },
  colors: {
    primary: {
      100: "hsl(25, 97%, 53%)",
      200: "hsl(217, 12%, 63%)",
      300: "hsl(216, 12%, 54%)",
      400: "hsl(213, 19%, 16%)",
      500: "hsl(216, 12%, 8%)"
    }
  }
});
