import React from "react";

import withAuth from  '../utils/withAuth';
import People from "../components/people/people";

class PeoplePage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps({ req, res, query }) {
        const page = query.page ? parseInt(query.page) : 1;
        return { page }
    }

    render() {
        const { page } = this.props;

        return (
            <People page={page}/>
        );
    }
}

export default withAuth(PeoplePage, "People List") 