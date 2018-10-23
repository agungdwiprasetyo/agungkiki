import React, {PureComponent} from "react";
import API from "../../pages/helper/helper";

export default class AboutComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            event: {}
        };

        this.api = new API;

        this.getEvents = this.getEvents.bind(this);

        this.getEvents();
    }
    
    getEvents() {
        this.setState({
            loading: true
        });
        this.api.apiGet("invitation/event").then(response => {
            this.setState({loading: false});
            this.setState({event: response.data});
        }).catch(err => {
            console.log(err);
            this.setState({
                loading: false,
                event: {}
            });
        })
    }
    
    render() {
        const {
            loading,
            event
        } = this.state;

        const Event = (props)=>{
            return (
                <main>
                    {props.name}: <b>{props.data}</b>
                </main>
            );
        }

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
                                <h5> { loading ? <div className="animated-background date-loading"></div> : event.date } </h5> 
                                <p className="akad"> { loading ? <div className="animated-background ceremony-loading"></div> : <Event name="Ceremony" data={event.ceremony} /> }
                                    <span>{ loading ? <div className="animated-background reception-loading"></div> : <Event name="Reception" data={event.reception} /> }</span>
                                    { loading ? <div className="animated-background address-loading"></div> : event.address }
                                </p> 
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

                    .date-loading {
                        max-width: 372px;
                        min-height: 40px;
                    }
                    .ceremony-loading {
                        max-width: 172px;
                        min-height: 30px;
                    }
                    .reception-loading {
                        margin-top: 5px;
                        max-width: 250px;
                        min-height: 30px;
                    }
                    .address-loading {
                        margin-top: 20px;
                        max-width: 672px;
                        min-height: 30px;
                    }
                `}</style>
            </div> 
        );
    }
}

