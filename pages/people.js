import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import People from "../components/people/people";
import 'isomorphic-fetch';

export default class PeoplePage extends PureComponent {

    render() {
        return(
          <main>
            <Layout title={ "People List" } showBack={ true } />
            <People />
          </main>
        );
    }
}