const fetch = require('node-fetch');

class RequestHandler {
    constructor(client) {
        this.client = client;
    }

    async request(url, method, options) {
        const data = await fetch(url, {
        method: method,
            headers: options.header || {
                'Content-Type': 'application/json',
                'authorization': `Bot ${this.client.token}`
            },
    })
    .then(res => res.json())
    .then(json => console.log(json));
     return data;
    }

}

module.exports = RequestHandler;
