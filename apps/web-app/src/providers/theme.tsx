"use client";

import { theme } from "@core/theme";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [juiTheme, setJuiTheme] = useState<any>(null);

  useEffect(() => {
    // Call extendTheme on the client
    const themeObj = extendTheme({ ...theme });
    setJuiTheme(themeObj);
  }, []);

  // Prevent rendering until the theme is ready
  if (!juiTheme) return null;

  return (
    <CssVarsProvider theme={juiTheme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
