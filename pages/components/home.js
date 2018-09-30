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
            <div id="home" class="banner ">
                <div class="agileinfo-main">
                    <div class="slider">
                        <ul class="rslides" id="slider1">
                            <li> 
                                <div class="banner-w3lstext">
                                    <h3 class="font-wedding">We're Getting Married</h3>
                                    <h4>
                                        <div>
                                            “And of His signs is that He created for you, of yourselves, spouses, that you might repose in them, and He has set between you love and mercy. Surely in that are signs for a people who consider” - <b> Ar-Rum: 21</b>
                                        </div>
                                    </h4>
                                </div>	
                            </li>
                        </ul>
                    </div>	
                    <div class="agileinfo-header">
                        <div class="container">
                            <div class="agile-logo">
                            </div>
                            <div class="agileits-w3layouts-icons">
                                <div class="social-icon w3-agile">
                                    <a href="https://web.facebook.com/agungdwip22" target="_blank" class="social-button facebook"><i class="fa fa-facebook"></i></a> 
                                    <a href="https://github.com/agungdwiprasetyo/agungkiki" target="_blank" class="social-button github"><i class="fa fa-github"></i></a> 
                                    <a href="https://www.instagram.com/agungdp22" target="_blank" class="social-button instagram"><i class="fa fa-instagram"></i></a> 
                                </div> 
                            </div>
                            <div class="clearfix"> </div>
                        </div>	    
                    </div>
                </div>
            </div> 
        );
    }
}

export default HomeComponent;