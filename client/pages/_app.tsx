import type { AppProps } from "next/app";
import { ShoppingCartProvider } from "../contexts/ShoppingCart/ShoppingCartProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Component {...pageProps} />
    </ShoppingCartProvider>
  );
}

export default MyApp;
