import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '~/styles/theme'
import createEmotionCache from '~/styles/createEmotionCache'
import 'modern-css-reset/dist/reset.min.css'
import { appAxios } from '~/lib/api/appAxios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConvertedToastContainer } from '~/components/ConvertedToaster'
import { Provider } from 'react-redux'
import { store } from '~/lib/redux/store'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  React.useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await appAxios.get('/company/auth/csrf')
      appAxios.defaults.headers.common['csrf-token'] = data.csrfToken
    }
    getCsrfToken()
  }, [])
  return (
    <>
      <Provider store={store}>
        <ConvertedToastContainer />
        <CacheProvider value={emotionCache}>
          <QueryClientProvider client={queryClient}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </CacheProvider>
      </Provider>
    </>
  )
}
