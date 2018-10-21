import React, { PureComponent } from "react";

export default class FooterComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-agile">
		        <div className="container">
                    <div className="footer-btm-agileinfo">
                        <div className="col-md-12 col-xs-12 footer-grid footer-review">
                            <div className="copy-w3lsright"> 
                                <p>© 2018 <a href="https://www.linkedin.com/in/agung-dwi-prasetyo/" target="_blank">Agung Dwi Prasetyo</a> 
                                <b> | </b> Build with <a href="https://nextjs.org/" target="_blank">Next.js</a> 
                                <b> | </b> <b>#2019gantistatus</b></p>
                            </div> 
                        </div> 
                    </div>   
                </div>
            </div> 
        );
    }
}