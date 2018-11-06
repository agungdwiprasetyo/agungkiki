import React from "react";
import 'isomorphic-fetch';
import jsHttpCookie from 'cookie';
import jsCookie from 'js-cookie';
import NProgress from 'nprogress';
import Router from 'next/router';

import API from "../helper/helper";
import Layout from "../components/Layout";
import People from "../components/people/people";
import Unauthorized from "../components/unauthorized";
import Header from "../components/Header";

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    
    static async getInitialProps({ req, res, query }) {
        let isAuth, page, token;

        let cookie = {};
        try {
            if (req && req.headers) {
                cookie = jsHttpCookie.parse(req.headers.cookie);
                token = cookie.token;
            } else {
                token = jsCookie.get("token");
                cookie.token = token;
            }
        } catch (e) {
            token = jsCookie.get("token");
            cookie.token = token;
        }

        page = query.page ? parseInt(query.page) : 1;
        
        const api = new API(token);
        const resp = await api.isAuthenticate();
        isAuth = resp.success;

        return { isAuth, page, token }
    }

    render() {
        const { isAuth, page, token } = this.props;

        return (
            <main>
                <Layout title={ "People Lists" } showBack={ true } />
                {!isAuth ? <Unauthorized /> : 
                    <div className="container">
                        <Header />
                        <People token={token} page={page}/>
                    </div>
                }
            </main>
        );
    }
}