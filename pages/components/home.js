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
            <div id="home" class="banner">
                <div class="agileinfo-main">
                    <div class="slider">
                        <ul class="rslides" id="slider1">
                            <li> 
                                <div class="banner-w3lstext">
                                    <h3>We're Getting Married </h3>
                                </div>	
                            </li>
                            <li> 
                                <div class="banner-w3lstext">
                                    <h3>Testing 2. </h3>
                                </div>	
                            </li>
                            <li>	
                                <div class="banner-w3lstext">
                                    <h3>Testing 3. </h3>
                                </div>	
                            </li>
                        </ul>
                    </div>	
                    <div class="agileinfo-header">
                        <div class="container">
                            <div class="agile-logo">
                                <h1><a href="javascript:void(0)"><img src="static/images/i1.png" class="img-responsive" alt=""/> Wedding</a></h1>
                            </div>
                            <div class="agileits-w3layouts-icons">
                                <div class="social-icon w3-agile">
                                    <a href="#" class="social-button twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="social-button facebook"><i class="fa fa-facebook"></i></a> 
                                    <a href="#" class="social-button google"><i class="fa fa-google-plus"></i></a> 
                                    <a href="#" class="social-button instagram"><i class="fa fa-instagram"></i></a> 
                                </div> 
                            </div>
                            <div class="clearfix"> </div>
                        </div>	    
                    </div>
                    
                    <div class="top-nav">
                        <span class="menu">Menu</span>	
                        <ul class="w3l">
                            <li><a href="javascript:void(0)" class="scroll"><span onClick={() => this.handleScroll("home")}>Home</span></a></li>
                            <li><a href="javascript:void(0)" class="scroll"><span onClick={() => this.handleScroll("about")}>About</span></a></li>
                            <li><a href="javascript:void(0)" class="scroll"><span onClick={() => this.handleScroll("maps")}>Location</span></a></li>
                        </ul>
                    </div>
                </div>
            </div> 
        );
    }
}

export default HomeComponent;