import React, { PureComponent } from "react";
import API from "../../helper/helper";

export default class Event extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            event: {},
            isLoad: true
        }

        this.api = new API(props.token);
        this.api.GET(`invitation/event`).then(response => {
            let data = response.data != null ? response.data : [];
            this.setState({
                event: data,
                isLoad: false
            });
        });
    }

    render(){
        const {
            event,
            isLoad
        } = this.state;

        return (
            <div className="col-xs-12">
                {isLoad ? <div className="loader"></div> : ""}
                <div className="text-center">
                    <div>{event.date}</div>
                    <div>{event.ceremony}</div>
                    <div>{event.reception}</div>
                    <div>{event.address}</div>
                </div>
            </div>
        );
    }
}