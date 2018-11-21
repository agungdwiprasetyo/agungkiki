import React, { PureComponent } from "react";
import Link from 'next/link';
import SweetAlert from 'sweetalert2-react';
import Router from 'next/router';
import NProgress from 'nprogress';

import API from "../../helper/helper";

export default class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isLoading: false,
            showAlert: false,
            err: false,
            user: {},
            pageLoad: true
        };

        this.api = new API();

        this.submitForm = this.submitForm.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    async componentDidMount () {
        NProgress.start();
        const api = new API();

        const resp = await api.isAuthenticate();
        NProgress.done();
        if (resp.success) {
            Router.push("/people");
        } else {
            this.setState({pageLoad: false});
        }
    }

    submitForm(event) {
        event.preventDefault();
        NProgress.start();

        this.setState({
            isLoading: true,
            showAlert: false,
            err: false
        });

        let payload = {
            username: this.state.username,
            password: this.state.password
        };

        this.api.POST("invitation/user/login", payload).then(response => {
            if (response.success) {
                localStorage.setItem("token", response.data.token);
                this.setState({ 
                    showAlert: true,
                    user: response.data.user
                });
            } else {
                this.setState({err: true});
            }
            this.setState({isLoading: false});
            NProgress.done();
        }).catch(err => {
            NProgress.done();
        });
    }

    closeAlert() {
        Router.push("/people");
    }

    render() {
        const {
            isLoading,
            err
        } = this.state;

        return (
            <div>
                <section className="features">
                    { !this.state.pageLoad ? 
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>Login</h2>
                                    <p className="text-muted"></p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="feature-item icon-left">
                                                <Link href={`/`} prefetch><a><i className="fa fa-home fa-fw fa-3x text-primary"></i></a></Link>
                                                <h4>Back to home</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-item">
                                                <div className="container-fluid">
                                                    <form onSubmit={this.submitForm}>
                                                        <div className="form-group">
                                                            <h4 className="form-label">Username:</h4>
                                                            <input className={err ? "form-control input-lg error" : "form-control input-lg"} 
                                                                type="text" required
                                                                value={this.state.username} 
                                                                onChange={event => 
                                                                    this.setState({
                                                                        username: event.target.value,
                                                                        err: false
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                        <div className="form-separate"></div>
                                                        <div className="form-group">
                                                            <h4 className="form-label">Password:</h4>
                                                            <input className={err ? "form-control input-lg error" : "form-control input-lg"} 
                                                                type="password" required
                                                                value={this.state.password} 
                                                                onChange={event => 
                                                                    this.setState({
                                                                        password: event.target.value,
                                                                        err: false
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                        <div className="form-separate"></div>
                                                        <div className="form-group"> 
                                                            <div className="col-md-12">
                                                                <button type="submit" className="btn btn-primary btn-lg">
                                                                    {isLoading ? <i className="fa fa-spinner fa-spin" style={{marginRight: "6px"}}></i> : ""}
                                                                    Login
                                                                </button>
                                                            </div>
                                                            <div className="col-md-12 error">
                                                                { err ? <b>Invalid username/password</b> : ""}
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : "" }
                </section>

                <SweetAlert
                    show={this.state.showAlert}
                    title={"Welcome, " + this.state.user.name}
                    onConfirm={() => this.closeAlert()}
                />

                <style jsx>{`
                    .contact-form input[type="password"]{
                        margin-top: 0.8em;
                        width: 100%;
                        color: #999;
                        background: none;
                        outline: none;
                        font-size: 1em;
                        padding: .7em .8em;
                        margin-right: 0;
                        border: 1px solid #ccc;
                        -webkit-appearance: none;
                        border-radius: 3px;
                        -webkit-border-radius: 3px;
                        -moz-border-radius: 3px;
                        -o-border-radius: 3px;
                        -ms-border-radius: 3px;
                    }
                    @media(min-width:1000px){
                        .container-login {
                            width: 40%;
                        }
                    }

                    .error {
                        border-color: #d13127 !important;
                        color: #d13127 !important;
                    }
                `}</style>
            </div>
        );
    }
}