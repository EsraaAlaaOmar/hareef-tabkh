// pages/_app.js
import React from 'react';
import '../src/app/globals.css'
import '../src/app/style/style.scss';
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from 'react-query';
function MyApp({ Component, pageProps }: AppProps) {
   const queryClient = new QueryClient();
  return (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
    
  )
}

export default MyApp;