import React, { PureComponent } from "react";
import Link from 'next/link';
import SweetAlert from 'sweetalert2-react';
import API from "../../helper/helper";
import jsCookie from 'js-cookie';
import Router from 'next/router';
import NProgress from 'nprogress';

export default class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isLoading: false,
            showAlert: false,
            err: false,
            user: {}
        };

        this.api = new API();

        this.submitForm = this.submitForm.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
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
                this.setState({ 
                    showAlert: true,
                    user: response.data.user
                });
                jsCookie.set('token', response.data.token);
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
            <div className="about w3-agile">
                <div className="container">
                    <div className="contact-info">	
                        <div className="col-md-12 text-center">
                            <div className="cnt-address">
                                <h5>Login</h5>
                            </div>
                            <div className="contact-form">  
                                <form onSubmit={this.submitForm}>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <input 
                                                value={this.state.username} 
                                                onChange={event => this.setState({ username: event.target.value })}
                                                type="text" placeholder="Username" required />
                                        </div>
                                        <div className="col-xs-12">
                                            <input 
                                                value={this.state.password} 
                                                onChange={event => this.setState({ password: event.target.value })}
                                                type="password" placeholder="Password" required /> 
                                        </div>
                                        <div className="col-xs-12 text-center">
                                            <button
                                                disabled={isLoading ? "disabled": ""} 
                                                type="submit" >
                                                {isLoading ? <i className="fa fa-spinner fa-spin" style={{marginRight: "2px"}}></i> : ""}
                                                LOGIN
                                            </button>
                                            <br />
                                            { err ? <b>Invalid username/password</b> : ""}
                                        </div>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>

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
                `}</style>
            </div>
        );
    }
}