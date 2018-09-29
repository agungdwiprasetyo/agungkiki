import React, {PureComponent} from "react";

class HeadComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }
    
    render() {
        return(
            <div id="home" class="banner">
                <div class="agileinfo-main">
                    <div class="slider">
                        <script src="static/js/responsiveslides.min.js"></script>
                        <ul class="rslides" id="slider1">
                            <li> 
                                <div class="banner-w3lstext">
                                    <h3>Testing 1. </h3>
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
                                <h1><a href="index.html"><img src="static/images/i1.png" class="img-responsive" alt=""/> Wedding</a></h1>
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
                            <li><a class="active" href="index.html"><span>Home</span></a></li>
                            <li><a href="#about" class="scroll"><span>About</span></a></li>
                            <li><a href="#services" class="scroll"><span>Services</span></a></li> 
                            <li><a href="#portfolio" class="scroll"><span>Portfolio</span></a></li>
                            <li><a href="#news" class="scroll"><span>News</span></a></li>
                            <li><a href="#contact" class="scroll"><span>Contact</span></a></li>
                        </ul>
                    </div>
                </div>
            </div> 
        );
    }
}

export default HeadComponent;