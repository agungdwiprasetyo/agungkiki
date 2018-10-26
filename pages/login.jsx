import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import Login from "../components/login/login";
import 'isomorphic-fetch';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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