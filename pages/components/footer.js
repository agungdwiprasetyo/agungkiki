import React, { PureComponent } from "react";

class FooterComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="footer-agile">
		        <div class="container">
                    {/* <div class="footer-top-agileinfo"> 
                        <div class="col-md-12 col-sm-12 footer-wthree-grid">  
                            <div class="agile-logo footer-w3logo">
                                <h2><a href="index.html"><img src="static/images/iconheader.png" alt=""/> Leave message</a></h2>
                            </div>
                        </div>
                        <div class="clearfix"> </div>		
                    </div> */}
                    <div class="footer-btm-agileinfo">
                        <div class="col-md-12 col-xs-12 footer-grid footer-review">
                            {/* <h3>Newsletter</h3> */}
                            
                            <div class="copy-w3lsright"> 
                                <p>© 2018 Agung Dwi Prasetyo . All rights reserved | Build with <a href="https://nextjs.org/" target="_blank">Next.js</a></p>
                            </div> 
                        </div> 
                        <div class="clearfix"> </div>
                    </div>   
                </div>
            </div> 
        );
    }
}

export default FooterComponent;