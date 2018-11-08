import React, { PureComponent } from "react";
import 'isomorphic-fetch';
import NProgress from 'nprogress';
import Router from 'next/router';

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
        
        const api = new API();
        const resp = await api.isAuthenticate();
        isAuth = resp.success;

        return { isAuth }
    }

    render() {
        const { isAuth } = this.props;

        return (
            <main>
                <Layout title={ "Event" } showBack={ true } />
                {!isAuth ? <Unauthorized /> : 
                    <div className="container">
                        <Header />
                        <Event />
                    </div>
                }
            </main>
        );
    }
}