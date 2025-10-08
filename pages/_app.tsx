import type { AppProps } from 'next/app';
import { StyleProvider } from '../contexts/StyleContext';
import '../styles/main.scss';

function PortfolioApplication({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider initialTheme="purple">
      <Component {...pageProps} />
    </StyleProvider>
  );
}

export default PortfolioApplication;
