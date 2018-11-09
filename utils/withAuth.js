import React, {Component} from 'react';
import NProgress from 'nprogress';

import Layout from "../components/Layout";
import Unauthorized from "../components/unauthorized";
import API from "../helper/helper";

export default function withAuth(AuthComponent, pageTitle) {
    const api = new API();
    return class Authenticated extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isAuth: false,
                isLoad: true
            };
        }

        async componentDidMount () {
            NProgress.start()
            const resp = await api.isAuthenticate();
            this.setState({
                isAuth: resp.success,
                isLoad: false
            });
            NProgress.done()
        }

        render() {
            return (
                <main>
                    <Layout title={ pageTitle } showBack={ true } />
                    { this.state.isLoad ? "" : 
                        this.state.isAuth ? <AuthComponent {...this.props} /> : 
                        (
                            <Unauthorized /> 
                        )
                    }
                </main>
            )
        }
    }
}