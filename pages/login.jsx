import React, { PureComponent } from "react";

import Layout from "../components/Layout";
import Login from "../components/login/login";
import Footer from "../components/home/footer";

export default class LoginPage extends PureComponent {
    render() {
        return(
          <main>
                <Layout title={ "Login" } showBack={ true } />
                <div className="auth-page">
                    <Login />
                    <Footer />
                </div>
          </main>
        );
    }
}