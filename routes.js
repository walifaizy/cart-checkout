const nextRoutes = require('next-routes')();

const routes = nextRoutes;
module.exports = nextRoutes;

routes
    .add({
        name: 'index',
        pattern: `/`,
        page: 'index',
    })
    .add({
        name: 'cart',
        pattern: `/cart`,
        page: 'cart',
    });

module.exports = routes;
