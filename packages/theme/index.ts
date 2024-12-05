"use client";

import type { PaletteRange } from "@mui/joy/styles";
import { CssVarsThemeOptions } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    secondary: true;
  }

  interface Palette {
    // this will make the node `secondary` configurable in `extendTheme`
    // and add `secondary` to the theme's palette.
    secondary: PaletteRange;
  }
}
export const theme: CssVarsThemeOptions = {
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "50": "#E5F0FD",
          "100": "#B7D4F9",
          "200": "#89B9F4",
          "300": "#5C9DF0",
          "400": "#2E82EB",
          "500": "#0066E7",
          "600": "#0055C1",
          "700": "#00449A",
          "800": "#003374",
          "900": "#00224D",
        },
        secondary: {
          "50": "#E6EAEC",
          "100": "#B9C3C9",
          "200": "#8C9CA6",
          "300": "#607683",
          "400": "#334F60",
          "500": "#06283D",
          "600": "#0A2539",
          "700": "#0E2235",
          "800": "#111E30",
          "900": "#151B2C",
        },
        neutral: {
          "50": "#FFFFFF",
          "100": "#F0F3F6",
          "200": "#E6EAEB",
          "300": "#E6E8E9",
          "400": "#E5E8EB",
          "500": "#D9DBDD",
          "600": "#B3B8BB",
          "700": "#9AA0A3",
          // '800': '#656A6E',
          "800": "#4E585E",

          // '900': '#6A7175',
          "900": "#02111A",
          // '1000': '#4E585E',
        },
        danger: {
          "50": "#FDD8D8",
          "100": undefined,
          "200": "#FBB1B1",
          "300": "#F98B8B",
          "400": "#F76464",
          "500": "#DF3813",
          "600": "#BF3010",
          "700": "#A1280E",
          "800": "#661919",
          "900": "#82200B",
        },
        success: {
          "50": "#FFFFFF",
          "100": undefined,
          "200": "#CBF2E0",
          "300": "#88EEBE",
          "400": "#5AE9A5",
          "500": "#11C971",
          "600": "#008545",
          "700": "#0C9152",
          "800": "#0A7340",
          "900": "#003D20",
        },
        warning: {
          "50": "#FFF6EA",
          "100": undefined,
          "200": "#FEE4BE",
          "300": "#FCD191",
          "400": "#FCC066",
          "500": "#FAA424",
          "600": "#DB9020",
          "700": "#BD7C1B",
          "800": "#9E6817",
          "900": "#7F5413",
        },
      },
    },
    dark: {
      palette: {},
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          padding: "10px 20px",
          backgroundColor: "#0066E7",
          "&:hover": {
            backgroundColor: "#5C9DF0",
          },
        },
      },
    },
  },
  fontFamily: {
    display: "Poppins, var(--joy-fontFamily-fallback)",
    body: "Poppins, var(--joy-fontFamily-fallback)",
  },
};
