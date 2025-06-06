import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./App.tsx";
import { enviroment } from "./config/environment/index.ts";
import { AuthAndPortalDataProvider } from "./context/authAndPortalDataProvider/index.tsx";

const redirect_uri = window.location.origin;

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={enviroment.AUTH0_DOMAIN}
      clientId={enviroment.CLIENT_ID}
      authorizationParams={{
        redirect_uri,
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      <AuthAndPortalDataProvider>
        <App />
      </AuthAndPortalDataProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
