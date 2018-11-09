import React, { PureComponent } from "react";

import withAuth from  '../utils/withAuth';
import Event from "../components/event/event";
import Header from "../components/Header";

class EventPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Event />
            </div>
        );
    }
}

export default withAuth(EventPage, "Event") 