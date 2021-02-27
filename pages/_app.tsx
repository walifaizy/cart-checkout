import { GlobalStyles } from '../styles';
import { CartContextProvider } from '../contexts/cartContext';

function MyApp({ Component, pageProps }) {
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
