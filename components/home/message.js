import React, { PureComponent } from "react";
import SweetAlert from 'sweetalert2-react';
import API from "../../helper/helper";
import Link from 'next/link';

export default class MessageComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            message: "",
            waNumber: "",
            relation: "",
            isAttend: null,
            showAttendAlert: false,
            isLoading: false,
            isLoadingNumber: true,
            totalPresent: 0,
            showAlert: false,
            err: null,
            mobileMode: false,
        };

        this.api = new API();

        this.handleChangeState = this.handleChangeState.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.getTotalPresent = this.getTotalPresent.bind(this);
        this.closeAlert = this.closeAlert.bind(this);

        this.getTotalPresent();
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({mobileMode: window.innerWidth <= 400});
    }

    getTotalPresent() {
        this.setState({ isLoadingNumber: true });
        this.api.GET("invitation/root?query={get_count(is_attend:true)}").then(response => {
            this.setState({ totalPresent: response.data.get_count });
            this.setState({ isLoadingNumber: false });
        }).catch(err => {
            console.log(err);
            this.setState({ isLoadingNumber: false });
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
            relation: this.state.relation,
            isAttend: this.state.isAttend
        }

        this.api.POST("invitation/save", payload).then(response => {
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
            relation: "",
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
            isLoadingNumber,
            isAttend,
            totalPresent,
            isLoading,
            err
        } = this.state;

        return (
            <div className="contact">
                <div className="container">
                    <div className="contact-info">
                        <div className="col-md-12 contact-grids contact-grids-w3right">
                            <div className="row">
                                <div className="col-xs-6">
                                    <h5>Will you join us in celebrating?</h5>
                                </div>
                                <div className="col-xs-6 text-right">
                                    <h5><b>{!isLoadingNumber ? totalPresent : <i className="fa fa-spinner fa-spin"></i>}</b></h5>
                                    <Link href={`/people`} prefetch><a>people</a></Link> will be presence
                                </div>
                            </div>
                            
                            <div className="contact-form">
                                <div className="row">
                                    <div className="col-xs-12" style={{marginBottom: "30px"}}>
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
                                                        <span><b>Thanks!</b> See you later.</span> :
                                                        <span>Hopefully your prayer be with us.</span>
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
                                        <form onSubmit={this.submitForm}>
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <div className="form-group">
                                                        <b className="form-title">Leave message to us:</b>
                                                        <textarea className="form-control"
                                                            value={this.state.message} 
                                                            onChange={event => this.setState({ message: event.target.value })}
                                                            name="Message" placeholder="Your message for us" required rows="1"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12">
                                                    <div className="form-group">
                                                        <b className="form-title">Name:</b>
                                                        <input className="form-control input-lg"
                                                            value={this.state.name} 
                                                            onChange={event => this.setState({ name: event.target.value })}
                                                            type="text" placeholder="Your name" required />
                                                    </div>
                                                </div>
                                                <div className="col-xs-12">
                                                    <div className="row">
                                                        <div className="col-xs-6">
                                                            <div className="form-group">
                                                                <b className="form-title">Relation {this.state.mobileMode ? "w/" : "with"} bridegroom:</b>
                                                                <input className="form-control input-lg"
                                                                    value={this.state.relation} 
                                                                    onChange={event => this.setState({ relation: event.target.value })}
                                                                    type="text" placeholder="(e.g Teman kuliah)" />
                                                                </div>
                                                        </div>
                                                        <div className="col-xs-6">
                                                            <div className="form-group">
                                                                <b className="form-title">WhatsApp number:</b>
                                                                <input className="form-control input-lg"
                                                                    value={this.state.waNumber} 
                                                                    onChange={event => this.setState({ waNumber: event.target.value })}
                                                                    type="text" pattern="[0-9]+" placeholder="(e.g 0812xxxx)" required maxLength="15"/> 
                                                                    {err != null ? <span><br /><b>{err}</b></span> : ""}
                                                            </div>
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

                <style jsx>{
                    `
                        .form-title {
                            font-family: 'KoHo', sans-serif !important;
                        }
                    `
                }</style>
            </div> 
        );
    }
}