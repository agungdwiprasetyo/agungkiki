import React, {PureComponent} from "react";
import zenscroll from "zenscroll";

export default class HomeComponent extends PureComponent {
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
                    <div className="agileinfo-footer">
                        <div className="container">
                            <div className="agile-logo">
                            </div>
                            <div className="agileits-w3layouts-icons">
                                <button className="download-invitation text-center">
                                    <a href="https://agungdp.storage.googleapis.com/wedding/static/invitation.pdf" target="_blank">
                                        <i className="fa fa-download"></i>  Download Invitation
                                    </a> 
                                </button> 
                            </div>
                            <div className="clearfix"> </div>
                        </div>	    
                    </div>
                </div>

                <style jsx>{`
                    .download-invitation {
                        border: 1px dashed #999;
                        padding: 10px;
                        font-weight: bold;
                        font-family: "KoHo";
                        cursor: pointer;
                    }
                `}</style>
            </div> 
        );
    }
}