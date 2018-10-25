import React, {Component} from "react";
import Layout from "../components/Layout";
import Home from "../components/home/home";
import About from "../components/home/about";
import Maps from "../components/home/maps";
import Message from "../components/home/message";
import Footer from "../components/home/footer";

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
            <main>
                <Layout 
                    title={'Agung & Kiki Wedding'} 
                    description={'A PWA built with React and Next.js for my wedding'}>
                </Layout>
                <Home />
                <About />
                <Maps />
                <Message />
                <Footer />
            </main>
        );
    }
}

export default App;