import React, { PureComponent } from "react";
import Link from 'next/link';

export default class Unauthorized extends PureComponent {
    render() {
        return (
            <div id="event" className="about w3-agile">
                <div className="container">
                    <div className="contact-info">	
                        <div className="col-md-12 text-center">
                            <div className="cnt-address">
                                <h5 className="unauth-header">People List</h5> 
                                <div className="">
                                    <img src="https://storage.googleapis.com/agungdp/wedding/static/unautho.png" className="img-people" />
                                </div>
                                <p className="unauth">Sorry, you're not authorize</p>
                                <p className="unauth"><Link href="/"><a>Back To Home</a></Link> or <Link href="/login"><a>Login</a></Link></p>
                            </div>
                        </div>
                        <div className="col-md-12">
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .img-people {
                        display: block;
                        height: auto;
                        max-width: 70%;
                        border: 0;
                        margin-left: auto;
                        margin-right: auto;
                        margin-top: 10px;
                    }

                    .unauth-header {
                        font-size: 2em;
                    }

                    .unauth {
                        font-size: 1.5em;
                    }

                    @keyframes placeHolderShimmer{
                        0%{
                            background-position: -468px 0
                        }
                        100%{
                            background-position: 468px 0
                        }
                    }
                    
                    .animated-background {
                        background: #fff;
                        margin: 0 auto;
                        max-width: 472px;

                        animation-duration: 1s;
                        animation-fill-mode: forwards;
                        animation-iteration-count: infinite;
                        animation-name: placeHolderShimmer;
                        animation-timing-function: linear;
                        background: #f6f7f8;
                        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
                        background-size: 800px 104px;
                        height: 10px;
                        position: relative;
                    }
                `}</style>
            </div>
        );
    }
}