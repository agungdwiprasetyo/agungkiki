import React, {PureComponent} from "react";

class AboutComponent extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div id="about" class="about w3-agile">
                <div class="container">
                    <div class="about-agileinfo-row">
                        <div class="col-md-6 col-sm-6 about-w3grids about-w3left">
                            <h3 class="agileits-title"> About Us</h3> 
                            <h6>Agung & Kiki </h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida mauris non mi gravida, at sollicitudin odio efficitur. Mauris ex nulla, aliquam ornare facilisis nec convallis pulvinar a non nunc non leo sollicitudin
                            Mattis tellus eget tellus dictum justo scelerisque interdum mauris rutrum turpis eget tincidunt eleifend vestibulum condimentum mollis tellus eu magna laoreet Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias phasellus mattis tellus eget tellus dictum justo scelerisque interdum</p>
                        </div>
                        <div class="col-md-6 col-sm-6 about-w3grids about-w3limg">
                            <img src="static/images/wedrings.jpg" class="img-responsive" alt=""/> 
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default AboutComponent;

