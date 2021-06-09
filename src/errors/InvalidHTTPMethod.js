module.exports = class HTTPMethodNotSupported extends Error {
    constructor(message) {
        super(message);
        this.name = 'HTTPMethodNotSupported';
    }
};
