import type { NextPage } from "next";

import { App } from "../components/App";

import { Auth0Provider } from "@auth0/auth0-react";

const domain = "judigot.us.auth0.com";

const clientId = "EZZHPH4CKbv50ylvcLB5BmDC8ZESQUFa";

const Home: NextPage = () => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={
        typeof window !== "undefined" && window.location.origin
          ? window.location.origin
          : ""
      }
    >
      <App />
    </Auth0Provider>
  );
};

export default Home;
