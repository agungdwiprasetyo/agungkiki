import React from "react";

import withAuth from  '../utils/withAuth';
import People from "../components/people/people";
import Header from "../components/Header";

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
            <div className="container">
                <Header />
                <People page={page}/>
            </div>
        );
    }
}

export default withAuth(PeoplePage, "People List") 