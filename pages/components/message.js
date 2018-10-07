import React, { PureComponent } from "react";

class MessageComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="contact">
                <div class="container">
                    <h3 class="agileits-title header-section">RSVP</h3>   
                    <div class="contact-info">
                        <div class="col-md-12 contact-grids contact-grids-w3right">
                            <h5>Will you join us in celebrating?</h5>
                            <div class="contact-form">  
                                <form action="javascript:void(0)" method="post">
                                    <textarea name="Message" placeholder="Leave message to us" required="" rows="1"></textarea>
                                    <input type="text" name="First Name" placeholder="Name" required="" />
                                    <input type="email" name="Email" placeholder="Email" required="" /> 
                                    <input type="submit" value="SUBMIT" />
                                </form> 
                            </div>
                        </div> 
                        <div class="clearfix"> </div>
                    </div>
                </div>

                <div class="container">
                    <div class="contact-info">
                        <div class="col-md-12 contact-grids contact-grids-w3right">
                            <h5 class="see-you">your presence is the greatest gift to us</h5>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default MessageComponent;