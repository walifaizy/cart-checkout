import { GlobalStyles } from '../styles';
import { CartContextProvider } from '../contexts/cartContext';
import { useEffect } from 'react';
import Router from 'next/router';
import { pushRoute } from '../utils/pushroute';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (Router.router.route !== '/') {
            pushRoute('');
        }
    }, []);
    return (
        <div>
            <GlobalStyles />
            <CartContextProvider>
                {' '}
                <Component {...pageProps} />
            </CartContextProvider>
        </div>
    );
}

export default MyApp;
