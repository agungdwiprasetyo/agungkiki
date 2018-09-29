import React, {Component} from "react";
import Head from "./components/head";
import Header from "./components/header";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Head />
                <Header />
            </div>
        );
    }
}

export default App;