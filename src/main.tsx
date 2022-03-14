import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: `https://{yourOktaDomain}/oauth2/default`,
  clientId: '{yourClientID}',
  redirectUri: `${window.location.origin}/callback`,
});

function restoreOriginalUri(oktaAuth: OktaAuth, originalUri: string) {
  window.location.replace(
    toRelativeUrl(originalUri || "/", window.location.origin)
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Security>
  </React.StrictMode>,
  document.getElementById('root')
)
