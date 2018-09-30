import React, {PureComponent} from "react";

class AboutComponent extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div id="about" class="about w3-agile">
                <div class="container">
                    <h4 class="agileits-title">You are cordially invited to celebrate the wedding of</h4>
                </div>

                <div class="container">
                    <div class="about-agileinfo-row">
                        <div class="col-md-2 col-sm-2 about-w3grids about-w3left">
                            <h3 class="agileits-title"></h3>
                        </div>
                        <div class="col-md-8 col-sm-8 about-w3grids about-w3limg">
                            <h3 class="agileits-title font-wedding">Agung & Kiky</h3>
                        </div>
                        <div class="col-md-2 col-sm-2 about-w3grids about-w3right">
                            <h3 class="agileits-title"></h3>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>


                <div class="container">
                    <div class="contact-info">	
                        <div class="col-md-12 text-center">
                            <div class="cnt-address">
                                <h5>Sunday, December 30, 2018</h5> 
                                <p class="akad">Akad Nikah: <b>09.00 WIB</b>
                                    <span>Resepsi: <b>13.00 WIB s.d selesai</b></span>
                                    Jl. H. Liyas No.77, Paninggilan Utara, Ciledug, Kota Tangerang, Banten 15153
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

