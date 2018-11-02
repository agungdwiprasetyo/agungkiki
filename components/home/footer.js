import React, { PureComponent } from "react";

export default class FooterComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-agile">
		        <div className="container">
                    <div style={{color: "#fff", marginRight: 20}}><b>#2019gantistatus</b></div>
                    <div className="footer-btm-agileinfo">
                        <div className="col-md-12 col-xs-12 footer-grid footer-review">
                            <div className="copy-w3lsright"> 
                                <p>© {(new Date()).getFullYear()} <a href="https://www.linkedin.com/in/agung-dwi-prasetyo/" target="_blank">Agung Dwi Prasetyo</a>
                                </p>
                            </div> 
                        </div> 
                    </div>   
                </div>
            </div> 
        );
    }
}