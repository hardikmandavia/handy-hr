import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

import DashboardLayout from "../components/DashboardLayout";

import { theme } from "../constants/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default MyApp;
