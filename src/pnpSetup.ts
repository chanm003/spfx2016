import { setup as pnpSetup } from '@pnp/common';
import { Web } from '@pnp/sp';
import '@pnp/polyfill-ie11';
import '@pnp/odata';
import { proxyUrl, webRelativeUrl } from './settings';
import { IWebPartContext } from '@microsoft/sp-webpart-base';

interface IWebProps {
    web: Web;
}

function configureWeb(isLocal: boolean, context: IWebPartContext): Web {
    let web: Web;
    if (isLocal) {
        web = new Web(`${proxyUrl}${webRelativeUrl}`);
    } else {
        pnpSetup({ spfxContext: context });
        web = new Web(context.pageContext.web.absoluteUrl);
    }
    return web;
}

export {
    configureWeb,
    IWebProps
}