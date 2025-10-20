import type { AppProps } from 'next/app';
import { FC } from 'react';
import { StyleProvider, useStyleContext } from '../contexts/StyleContext';
import '../styles/main.scss';

const AppContent: FC<AppProps> = ({ Component, pageProps }) => {
  const { activeTheme } = useStyleContext();

  return (
    <div className={`theme-${activeTheme}`}>
      <Component {...pageProps} />
    </div>
  );
};

const App: FC<AppProps> = (props) => (
  <StyleProvider initialTheme="purple">
    <AppContent {...props} />
  </StyleProvider>
);

export default App;
