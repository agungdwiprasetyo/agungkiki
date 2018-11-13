import React, {Component} from 'react';
import NProgress from 'nprogress';

import Layout from "../components/Layout";
import Header from "../components/Header";
import Unauthorized from "../components/unauthorized";
import API from "../helper/helper";
import Footer from "../components/home/footer";

export default function withAuth(AuthComponent, pageTitle) {
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
            const api = new API();
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
                    <div className="auth-panel">
                        { this.state.isLoad ? "" : 
                            this.state.isAuth ? 
                            (
                                <div className="container">
                                    <Header />
                                    <AuthComponent {...this.props} /> 
                                </div>
                            ) : 
                            (   
                                <div>
                                    <Unauthorized />
                                </div>
                            )
                        }
                    </div>
                    <Footer />
                </main>
            )
        }
    }
}