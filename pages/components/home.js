import React, {PureComponent} from "react";
import zenscroll from "zenscroll";

class HomeComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        zenscroll.setup(500, 100);
    }

    handleScroll(to) {
        const toElement = document.getElementById(to);
        zenscroll.to(toElement);
    }
    
    render() {
        return(
            <div id="home" className="banner ">
                <div className="agileinfo-main">
                    <div className="slider">
                        <ul className="rslides" id="slider1">
                            <li> 
                                <div className="banner-w3lstext">
                                    <h3 className="font-wedding">We're Getting Married</h3>
                                    <h4>
                                        <div>
                                            “And of His signs is that He created for you, of yourselves, spouses, that you might repose in them, and He has set between you love and mercy. Surely in that are signs for a people who consider” - <b> Ar-Rum: 21</b>
                                        </div>
                                    </h4>
                                </div>	
                            </li>
                        </ul>
                    </div>	
                    <div className="agileinfo-header">
                        <div className="container">
                            <div className="agile-logo">
                            </div>
                            <div className="agileits-w3layouts-icons">
                                <div className="social-icon w3-agile">
                                    <a href="https://github.com/agungdwiprasetyo/agungkiki" target="_blank" className="social-button github"><i className="fa fa-github"></i></a> 
                                </div> 
                            </div>
                            <div className="clearfix"> </div>
                        </div>	    
                    </div>
                </div>
            </div> 
        );
    }
}

export default HomeComponent;