import { Auth0Client } from "@auth0/auth0-spa-js";

const auth0 = new Auth0Client({
    domain: "dev-l3uc0phhnireyse5.us.auth0.com",
    clientId: "EWh9H9fxbSJ1u9WoGREPOso4viRRCKex",
    authorizationParams: {
        redirect_uri: "http://localhost:3000",
    },
});
export default auth0;