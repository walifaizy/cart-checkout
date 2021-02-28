import Router from 'next/router';
// THIS IS JUST TO TACKLE ISSUE GH PAGES FOR REPO SPECIFIC URLS
const prefix = process.env.NODE_ENV === 'production' ? '/cart-checkout' : '';

export const pushToRoute = (pathName: string) => {
    Router.push({
        pathname: `${prefix}/${pathName}`,
    });
};
