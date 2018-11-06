import React, { PureComponent } from "react";
import 'isomorphic-fetch';
import NProgress from 'nprogress';
import Router from 'next/router';
import jsHttpCookie from 'cookie';
import jsCookie from 'js-cookie';

import Layout from "../components/Layout";
import Unauthorized from "../components/unauthorized";
import Event from "../components/event/event";
import API from "../helper/helper";
import Header from "../components/Header";

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class EventPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    static async getInitialProps({ req, res, query }) {
        let isAuth;

        let cookie = {};
        try {
            if (req && req.headers) {
                cookie = jsHttpCookie.parse(req.headers.cookie);
            } else {
                var token = jsCookie.get("token");
                cookie.token = token;
            }
        } catch (e) {
            var token = jsCookie.get("token");
            cookie.token = token;
        }
        
        const api = new API(cookie.token);
        const resp = await api.isAuthenticate();
        isAuth = resp.success;

        return { isAuth, token }
    }

    render() {
        const { isAuth, token } = this.props;

        return(
            <main>
                <Layout title={ "Event" } showBack={ true } />
                {!isAuth ? <Unauthorized /> : 
                    <div className="container">
                        <Header />
                        <Event token={token} />
                    </div>
                }
            </main>
        );
    }
}