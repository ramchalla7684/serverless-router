class Route {
    constructor(httpMethod, path, ...routeHandlers) {
        this.httpMethod = httpMethod;
        this.path = path;
        this.routeHandlers = routeHandlers;
    }
}

module.exports = Route;
