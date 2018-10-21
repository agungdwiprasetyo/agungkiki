import React, { PureComponent } from "react";
import Link from 'next/link';

export default class People extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="event" class="about w3-agile">
                <div class="container">
                    <div class="contact-info">	
                        <div class="col-md-12 text-center">
                            <div class="cnt-address">
                                <h5>People List</h5> 
                                <div>
                                    <img src="https://storage.googleapis.com/agungdp/wedding/static/unautho.png" />
                                </div>
                                <p class="akad">You're Not Authorize</p>
                                <p class="akad"><Link href="/"><a>Back To Home</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}