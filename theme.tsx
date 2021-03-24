import { extendTheme } from "@chakra-ui/react";

const colors = {
  brandGreen: {
    100: "rgb(77 255 167 / 10%)",
    500: "#0fa",
  },
  brandYellow: {
    100: "#f0e00a",
  },
  brandDark: {
    100: "#2b3e4b",
    200: "#172f41",
  },
  brandOrange: "#ee6123",
};

const styles = {
  global: () => ({
    html: {
      overflowY: "scroll",
      scrollBehavior: "smooth",
    },
    "html, body": {
      //backgroundColor: "#1c1732",
      // backgroundImage: "linear-gradient(44deg, #1c1732 30%, #4d344f 63%, #402959 71%, #1c1732 90%)",
      color: "white",
      // backgroundAttachment: "fixed",
    },
  }),
};

export const theme = extendTheme({
  colors,
  styles,
});
