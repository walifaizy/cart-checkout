import { GlobalStyles } from '../styles';
import { CartContextProvider } from '../contexts/cartContext';
import { useEffect } from 'react';
import Router from 'next/router';
import { pushToRoute } from '../utils/pushToRoute';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (Router.router.route !== '/') {
            pushToRoute('');
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
