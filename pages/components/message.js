import React, { PureComponent } from "react";
import API from "../helper/helper";

class MessageComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            message: "",
            email: "",
            isAttend: null,
            err: null
        };

        this.api = new API;

        this.handleChangeState = this.handleChangeState.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.getTotalPresent = this.getTotalPresent.bind(this);
    }

    getTotalPresent() {
        this.api.apiGet("invitation/root?query={get_count(is_attend:true)}").then(response => {
            this.handleChangeState("totalPresent", response.data.get_count);
        }).catch(err => {
            console.log(err);
        })
    }

    handleChangeState(name, value) {
        this.setState({
            [name]: value
        });
    }

    submitForm(event) {
        event.preventDefault();

        this.api.apiPost("invitation/save", this.state).then(response => {
            if (response.success) this.forceUpdate()
            else this.handleChangeState("err", response.message);
        }).catch(err => {
            this.handleChangeState("err", err.message);
        });
    }

    render() {
        const {
            name,
            email,
            message,
            isAttend,
            totalPresent,
            err
        } = this.state;

        this.getTotalPresent();

        return (
            <div class="contact">
                <div class="container">
                    <h3 class="agileits-title header-section">RSVP</h3>   
                    <div class="contact-info">
                        <div class="col-md-12 contact-grids contact-grids-w3right">
                            <h5>Will you join us in celebrating?</h5>
                            <h7>Total present: {totalPresent}</h7>
                            <div class="contact-form">  
                                <form onSubmit={this.submitForm}>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <div
                                                        className={"attending-option text-center" + (isAttend === true ? " active" : "")}
                                                        onClick={() => this.handleChangeState("isAttend", true)}
                                                    >
                                                        YES
                                                    </div>
                                                </div>
                                                <div className="col-xs-6" >
                                                    <div
                                                        className={"attending-option text-center" + (isAttend === false ? " active" : "")}
                                                        onClick={() => this.handleChangeState("isAttend", false)}
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
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <textarea 
                                                value={message} 
                                                onChange={event => this.handleChangeState("message", event.target.value)}
                                                name="Message" placeholder="Leave message to us" required="" rows="1"></textarea>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <input 
                                                        value={name} 
                                                        onChange={event => this.handleChangeState("name", event.target.value)}
                                                        type="text" name="First Name" placeholder="Name" required="" />
                                                </div>
                                                <div className="col-xs-6">
                                                    <input 
                                                        value={email} 
                                                        onChange={event => this.handleChangeState("email", event.target.value)}
                                                        type="email" name="Email" placeholder="Email" required="" /> 
                                                        {err != null ? <span><br /><b>{err}</b></span> : ""}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 text-center">
                                            <input type="submit" value="SUBMIT" />
                                        </div>
                                    </div>
                                </form> 
                            </div>
                        </div> 
                        <div class="clearfix"> </div>
                    </div>
                </div>

                <div class="container">
                    <div class="contact-info">
                        <div class="col-md-12 contact-grids contact-grids-w3right">
                            <h5 class="see-you">your presence is the greatest gift to us</h5>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default MessageComponent;