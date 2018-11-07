import React, { PureComponent } from "react";
import SweetAlert from 'sweetalert2-react';

import API from "../../helper/helper";

export default class Event extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            eventCode: "",
            date: "",
            ceremony: "",
            reception: "",
            address: "",
            showAlert: false,
            isLoad: true
        }

        this.api = new API();
        this.api.GET(`invitation/event`).then(response => {
            let data = response.data != null ? response.data : [];
            this.setState({
                eventCode: data.code,
                date: data.date,
                ceremony: data.ceremony,
                reception: data.reception,
                address: data.address,
                isLoad: false
            });
        });

        this.submitForm = this.submitForm.bind(this);
    }

    changeEventValue(key, value) {
        this.setState({[key]: value});
    }

    submitForm(event) {
        event.preventDefault();

        let payload = {
            code: this.state.eventCode,
            date: this.state.date,
            ceremony: this.state.ceremony,
            reception: this.state.reception,
            address: this.state.address,
        };

        this.setState({isLoad: true});
        this.api.POST("invitation/event/save", payload).then(response => {
            this.setState({
                isLoad: false,
                showAlert: true
            });
        }).catch(err => {
            this.setState({isLoad: false});
        });
    }

    render(){
        const {
            date,
            ceremony,
            reception,
            address,
            isLoad
        } = this.state;

        return (
            <div>
                {isLoad ? <div className="loader"></div> : ""}
                <div className="row">
                    <div className="container-fluid">
                        <form className="form-horizontal" onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label className="control-label col-sm-2">
                                    Date :
                                </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        defaultValue={date} 
                                        onChange={event => this.setState({date: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2">
                                    Ceremony : 
                                </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        defaultValue={ceremony} 
                                        onChange={event => this.setState({ceremony: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2">
                                    Reception : 
                                </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        defaultValue={reception} 
                                        onChange={event => this.setState({reception: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2">
                                    Address : 
                                </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        defaultValue={address} 
                                        onChange={event => this.setState({address: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-group"> 
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-info">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <SweetAlert
                    show={this.state.showAlert}
                    title="Success save"
                />
            </div>
        );
    }
}