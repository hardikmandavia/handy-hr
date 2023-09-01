import { AppProps } from 'next/app';

import Layout from "../components/Layout";

import '../globals.css';

function App({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;