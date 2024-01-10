import { extendTheme } from "native-base";

export const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto_100Thin",
      },
      400: {
        normal: "Roboto_400Regular",
      },
      500: {
        normal: "Roboto_500Medium",
      },
      700: {
        normal: "Roboto_700Bold",
      },
      900: {
        normal: "Roboto_900Black",
      },
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
  colors: {
    orange: {
      100: "#FFD8A8",
      300: "#FFAC40",
      400: "##EF8324",
      500: "#F58220",
    },
    blue: {
      700: "#3D4095",
      600: "#272639",
      900: "#161621",
    },
    aqua: "#0DBBCB",
    gray: {
      100: "#F2F2F2",
      200: "#E4E4E4",
      300: "#ABABAB",
      400: "#838383",
      500: "#fafafa33",
      600: "#1E1E1E",
    },
    yellow: {
      500: "#F5E834",
    },
    red: {
      500: "#F42A35",
      700: "#BC2525",
    },
    green: {
      500: "#3BC031",
    },
  },
  config: {
    initialColorMode: "dark",
  },
});
