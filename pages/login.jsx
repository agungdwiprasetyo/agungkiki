import React, { PureComponent } from "react";

import Layout from "../components/Layout";
import Login from "../components/login/login";
import 'isomorphic-fetch';

export default class LoginPage extends PureComponent {
    render() {
        return(
          <main>
              <Layout title={ "Login" } showBack={ true } />
              <Login />
          </main>
        );
    }
}