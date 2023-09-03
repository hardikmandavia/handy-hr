import { AppProps } from "next/app";
import StyledComponentsRegistry from "../../lib/registry";

import Layout from "../components/Layout";

import "../globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledComponentsRegistry>
  );
}
export default App;
