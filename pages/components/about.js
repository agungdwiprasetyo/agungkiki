import React, {PureComponent} from "react";

class AboutComponent extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div id="about" className="about w3-agile">
                <div className="container">
                    <h4 className="agileits-title">You are cordially invited to celebrate the wedding of</h4>
                </div>

                <div className="container">
                    <div className="about-agileinfo-row">
                        <div className="col-md-2 col-sm-2 about-w3grids about-w3left">
                            <h3 className="agileits-title"></h3>
                        </div>
                        <div className="col-md-8 col-sm-8 about-w3grids about-w3limg">
                            <h3 className="agileits-title font-wedding">Agung & Kiky</h3>
                        </div>
                        <div className="col-md-2 col-sm-2 about-w3grids about-w3right">
                            <h3 className="agileits-title"></h3>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>


                <div className="container">
                    <div className="contact-info">	
                        <div className="col-md-12 text-center">
                            <div className="cnt-address">
                                <h5>Sunday, December 30, 2018</h5> 
                                <p className="akad">Ceremony: <b>09.00 a.m</b>
                                    <span>Reception: <b>01.00 p.m till finish</b></span>
                                    Jl. H. Liyas II No.77, Paninggilan Utara, Ciledug, Kota Tangerang, Banten 15153
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default AboutComponent;

