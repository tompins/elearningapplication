// src/pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

