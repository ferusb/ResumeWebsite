import type { AppProps } from 'next/app';
import { StyleProvider, useStyleContext } from '../contexts/StyleContext';
import '../styles/main.scss';

function AppContent({ Component, pageProps }: AppProps) {
  const { activeTheme } = useStyleContext();

  return (
    <div className={`theme-${activeTheme}`}>
      <Component {...pageProps} />
    </div>
  );
}

function PortfolioApplication(props: AppProps) {
  return (
    <StyleProvider initialTheme="purple">
      <AppContent {...props} />
    </StyleProvider>
  );
}

export default PortfolioApplication;
