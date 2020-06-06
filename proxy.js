// https://pnp.github.io/pnpjs/v1/documentation/SPFx-On-Premesis-2016/
const RestProxy = require('sp-rest-proxy');

const settings = {
    configPath: './config/private.json', // Location for SharePoint instance mapping and credentials
    port: 8080,                          // Local server port
    staticRoot: './static'               // Root folder for static content
};

// http://localhost:8080/_api/web
const restProxy = new RestProxy(settings);
restProxy.serve();