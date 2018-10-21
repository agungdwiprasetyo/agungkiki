import React, { PureComponent } from "react";
import Link from 'next/link';

export default class People extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="event" className="about w3-agile">
                <div className="container">
                    <div className="contact-info">	
                        <div className="col-md-12 text-center">
                            <div className="cnt-address">
                                <h5>People List</h5> 
                                <div className="">
                                    <img src="https://storage.googleapis.com/agungdp/wedding/static/unautho.png" className="img-people" />
                                </div>
                                <p className="akad">Sorry, you're not authorize</p>
                                <p className="akad"><Link href="/"><a>Back To Home</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .img-people {
                        display: block;
                        height: auto;
                        max-width: 100%;
                        border: 0;
                        margin-left: auto;
                        margin-right: auto;
                    }
                `}</style>
            </div>
        );
    }
}