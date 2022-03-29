import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "'Overpass', sans-serif",
        backgroundColor: "hsl(216, 12%, 8%)"
      },
    },
  },
  colors: {
    primary: {
      100: "hsl(25, 97%, 53%)",
      
    }
  }
});
