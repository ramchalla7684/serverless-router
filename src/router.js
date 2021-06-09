const HTTPMethodNotSupported = require('./errors/InvalidHTTPMethod');
const MissingRouteHandler = require('./errors/MissingRouteHandler');
const Route = require('./route');

class Router {
    constructor() {
        this.routes = Object.freeze({
            DELETE: [],
            GET: [],
            POST: [],
        });
    }

    addRoute(httpMethod, path, ...routeHandlers) {
        if (!(httpMethod in this.routes)) {
            throw new HTTPMethodNotSupported(
                `Only ${Object.keys(this.routes).join(', ')} are supported`
            );
        }

        if (routeHandlers.length === 0) {
            throw new MissingRouteHandler(`At least route handler is required`);
        }

        this.routes[httpMethod].push(
            new Route(httpMethod, path, ...routeHandlers)
        );
        console.log(httpMethod, path, routeHandlers);
    }

    delete(path, ...routeHandlers) {
        this.addRoute('DELETE', path, ...routeHandlers);
    }

    get(path, ...routeHandlers) {
        this.addRoute('GET', path, ...routeHandlers);
    }

    post(path, ...routeHandlers) {
        this.addRoute('POST', path, ...routeHandlers);
    }

    route(request) {
        console.log(request, this.routes);
    }
}

module.exports = Router;
