module.exports = class MissingRouteHandler extends Error {
    constructor(message) {
        super(message);
        this.name = 'MissingRouteHandler';
    }
};
