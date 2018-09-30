import React, {PureComponent} from "react";

class MapsComponent extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(   
            <div id="maps" class="map">
                <div class="container">
                    <h3 class="agileits-title"> Location</h3> 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.18690443505!2d106.70704001476932!3d-6.239079695483814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb4b8e40dfc3%3A0xfc70fb4e0ebfe0fd!2sJl.+H.+Liyas+No.77%2C+Paninggilan+Utara%2C+Ciledug%2C+Kota+Tangerang%2C+Banten+15153!5e0!3m2!1sid!2sid!4v1538276245701" frameBorder="0" style={{border: 0}} allowfullscreen></iframe> 
                </div>
            </div>
        );
    }
}

export default MapsComponent;

