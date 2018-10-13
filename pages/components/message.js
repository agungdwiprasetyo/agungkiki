import React, { PureComponent } from "react";
import SweetAlert from 'sweetalert2-react';
import API from "../helper/helper";

class MessageComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            message: "",
            waNumber: "",
            isAttend: null,
            showAttendAlert: false,
            isLoading: false,
            showAlert: false,
            err: null
        };

        this.api = new API;

        this.handleChangeState = this.handleChangeState.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.getTotalPresent = this.getTotalPresent.bind(this);
        this.closeAlert = this.closeAlert.bind(this);

        this.getTotalPresent();
    }

    getTotalPresent() {
        this.api.apiGet("invitation/root?query={get_count(is_attend:true)}").then(response => {
            this.setState({ totalPresent: response.data.get_count })
        }).catch(err => {
            console.log(err);
        })
    }

    handleChangeState(name, value) {
        this.setState({
            [name]: value
        });
    }

    validateConfirm() {
        if (this.isAttend == null) {
            this.state.showAttendAlert = true;
        }
    }

    submitForm(event) {
        event.preventDefault();

        if (this.state.isAttend == null) {
            this.setState({ showAttendAlert: true });
            return false;
        }

        this.handleChangeState("err", null);
        this.handleChangeState("isLoading", true);

        this.setState({ showAlert: false });

        let payload = {
            name: this.state.name,
            waNumber: this.state.waNumber,
            message: this.state.message,
            isAttend: this.state.isAttend
        }

        this.api.apiPost("invitation/save", payload).then(response => {
            if (response.success) {
                this.setState({ showAlert: true });
            } else {
                this.handleChangeState("err", response.message);
            }
            this.handleChangeState("isLoading", false);
        }).catch(err => {
            this.handleChangeState("err", err.message);
            this.handleChangeState("isLoading", false);
        });
    }

    closeAlert() {
        this.setState({
            name: "",
            message: "",
            waNumber: "",
            isAttend: null,
            showAttendAlert: false,
            isLoading: false,
            showAlert: false,
            err: null
        });
        this.getTotalPresent();
    }

    render() {
        const {
            isAttend,
            totalPresent,
            isLoading,
            err
        } = this.state;

        return (
            <div className="contact">
                <div className="container">
                    <h3 className="agileits-title header-section">RSVP</h3>   
                    <div className="contact-info">
                        <div className="col-md-12 contact-grids contact-grids-w3right">
                            <div className="row">
                                <div className="col-xs-6">
                                    <h5>Will you join us in celebrating?</h5>
                                </div>
                                <div className="col-xs-6 text-right">
                                    <h5><b>{totalPresent}</b></h5> <h7>people will be presence</h7>
                                </div>
                            </div>
                            
                            <div className="contact-form">  
                                <form onSubmit={this.submitForm}>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <div
                                                        className={"attending-option text-center " + (isAttend === true ? " active" : "") +
                                                         ((this.state.showAttendAlert == true) && (this.state.isAttend == null) ? " warning" : "")
                                                        }
                                                        onClick={() => this.setState({ isAttend: true })}
                                                    >
                                                        YES
                                                    </div>
                                                </div>
                                                <div className="col-xs-6" >
                                                    <div
                                                        className={"attending-option text-center " + (isAttend === false ? " active" : "") +
                                                         ((this.state.showAttendAlert == true) && (this.state.isAttend == null) ? " warning" : "")
                                                        }
                                                        onClick={() => this.setState({ isAttend: false })}
                                                    >
                                                        NO
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                {isAttend != null &&
                                                    <div className="input-tips">
                                                        {isAttend ?
                                                            <span><b>Great!</b> See you there.</span> :
                                                            <span>Hopefully we can meet you there.</span>
                                                        }
                                                    </div>
                                                }
                                                { (this.state.showAttendAlert == true) && (this.state.isAttend == null) ?
                                                    <div className="text-not-confirm">
                                                        Kindly confirm your presence (<b>yes/no</b>)
                                                    </div> : ""
                                                }
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <textarea 
                                                value={this.state.message} 
                                                onChange={event => this.setState({ message: event.target.value })}
                                                name="Message" placeholder="Leave message to us" required rows="1"></textarea>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <input 
                                                        value={this.state.name} 
                                                        onChange={event => this.setState({ name: event.target.value })}
                                                        type="text" placeholder="Name" required />
                                                </div>
                                                <div className="col-xs-6">
                                                    <input 
                                                        value={this.state.waNumber} 
                                                        onChange={event => this.setState({ waNumber: event.target.value })}
                                                        type="text" placeholder="WhatsApp/Phone number (e.g 0812xxxx)" required maxLength="15"/> 
                                                        {err != null ? <span><br /><b>{err}</b></span> : ""}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 text-center">
                                            <button
                                                disabled={isLoading ? "disabled": ""} 
                                                type="submit" >
                                                {isLoading ? <i className="fa fa-spinner fa-spin" style={{marginRight: "2px"}}></i> : ""}
                                                SUBMIT
                                            </button>
                                        </div>
                                    </div>
                                </form> 
                            </div>
                        </div> 
                        <div className="clearfix"> </div>
                    </div>
                </div>
                
                <SweetAlert
                    show={this.state.showAlert}
                    title={"Thank You, " + this.state.name + " :)"}
                    onConfirm={() => this.closeAlert()}
                />

                <div className="container">
                    <div className="contact-info">
                        <div className="col-md-12 contact-grids contact-grids-w3right">
                            <h5 className="see-you">your presence is the greatest gift to us</h5>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default MessageComponent;