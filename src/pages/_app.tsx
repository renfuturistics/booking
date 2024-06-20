import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

import { EmotionCache } from "@emotion/react";
import createEmotionCache from "@/utils/EmotionCache";
import Layout from "@/components/Layout";
import theme from "@/utils/Theme"
import { wrapper, persistor } from "../state/store";

import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(propss: MyAppProps) {
  const { Component, ...rest } = propss;
  const { props, store } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
}
export default MyApp;
