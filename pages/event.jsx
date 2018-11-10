import React, { PureComponent } from "react";

import withAuth from  '../utils/withAuth';
import Event from "../components/event/event";

class EventPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Event />
        );
    }
}

export default withAuth(EventPage, "Event") 