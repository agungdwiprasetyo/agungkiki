import React, {Component} from "react";
import Head from "./components/head";
import Home from "./components/home";
import About from "./components/about";
import Maps from "./components/maps";
import Message from "./components/message";
import Footer from "./components/footer";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => {
              console.log('service worker registration successful')
            })
            .catch(err => {
              console.warn('service worker registration failed', err.message)
            })
        }
      }

    render() {
        return(
            <div>
                <Head />
                <Home />
                <About />
                <Maps />
                <Message />
                <Footer />
            </div>
        );
    }
}

export default App;