'use strict';

var pubService = require('./services/pubs.services.js');

function getListPub() {
    console.log(pubService.tousPubs());
}

function getListPubOpen() {
    console.log(pubService.pubsOuverts());
};

console.log(pubService.pubsOuverts());

module.exports = {
    services: {
        getListPub: getListPub,
        getListPubOpen: getListPubOpen
    }
};