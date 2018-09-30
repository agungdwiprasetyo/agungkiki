import React, {Component} from "react";
import Head from "./components/head";
import Home from "./components/home";
import About from "./components/about";
import Maps from "./components/maps";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Head />
                <Home />
                <About />
                <Maps />
            </div>
        );
    }
}

export default App;