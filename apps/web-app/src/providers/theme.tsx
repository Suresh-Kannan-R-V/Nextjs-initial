"use client";

import { theme } from "@core/theme";
import CssBaseline from "@mui/joy/CssBaseline";
import {
  CssVarsProvider as JoyCssVarsProvider,
  extendTheme,
} from "@mui/joy/styles";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const juiTheme = extendTheme({
    ...theme,
  });
  return (
    <JoyCssVarsProvider theme={juiTheme}>
      <CssBaseline />
      {children}
    </JoyCssVarsProvider>
  );
}
