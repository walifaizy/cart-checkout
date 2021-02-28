import { GlobalStyles } from '../styles';
import { CartContextProvider } from '../contexts/cartContext';
import { useEffect } from 'react';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (Router.router.route !== '/') {
            Router.push({
                pathname: '/',
            });
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
