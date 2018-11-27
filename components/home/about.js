import React, {PureComponent} from "react";
import API from "../../helper/helper";

export default class AboutComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            event: {},
            time: {},
            seconds: 0
        };

        this.api = new API();

        this.getEvents = this.getEvents.bind(this);
        this.timer = 0;
        this.countDown = this.countDown.bind(this);

        this.getEvents();
    }

    componentDidMount() {
        this.setState({ time: {d: 0, h: 0, m: 0, s: 0} });
    }

    countDown() {
        let seconds = this.state.seconds - 1;

        let days        = Math.floor(seconds/24/60/60);
        let hoursLeft   = Math.floor((seconds) - (days*86400));
        let hours       = Math.floor(hoursLeft/3600);
        let minutesLeft = Math.floor((hoursLeft) - (hours*3600));
        let minutes     = Math.floor(minutesLeft/60);
        let remainingSeconds = Math.floor(seconds % 60);
    
        this.setState({
            time: {
                "d": days,
                "h": hours,
                "m": minutes,
                "s": remainingSeconds
            },
            seconds: seconds
        });
        
        if (Math.floor(seconds) < 0) { 
            seconds = 0;
            clearInterval(this.timer);
        }
    }
    
    getEvents() {
        this.setState({
            loading: true
        });
        this.api.GET("invitation/event").then(response => {
            this.setState({loading: false});
            let date = "2018-12-30T08:00:00+07:00";
            let date1 = new Date();
            let date2 = new Date(date);
            let timeDiff = date2.getTime() - date1.getTime();
            if (timeDiff < 0) timeDiff = 0;
            let diffHours = (timeDiff / 1000);

            // response.data.date = date2.toDateString();
            this.setState({event: response.data, seconds: diffHours});
            this.timer = setInterval(this.countDown, 1000);
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
                <p>
                    {props.name ? props.name + ": " : ""} <b>{props.data}</b>
                </p>
            );
        }

        return(
            <div id="about" className="about w3-agile">
                <div className="container">
                    <h4 className="agileits-title">You are cordially invited to celebrate the wedding of</h4>
                </div>

                <div className="container">
                    <div className="about-agileinfo-row">
                        <div className="col-md-12 about-w3grids about-w3limg">
                            <h3 className="agileits-title font-wedding">Agung & Kiky</h3>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>

                <div className="container">
                    <div className="contact-info">	
                        <div className="col-md-12 text-center">
                            <div className="cnt-address">
                                <h5 className="akad"> { loading ? <div className="animated-background date-loading"></div> : event.date } </h5> 
                                <div className="akad"> 
                                    { loading ? <div className="animated-background ceremony-loading"></div> : <Event name="Ceremony" data={event.ceremony} /> }
                                    {this.state.time.d}d {this.state.time.h}h {this.state.time.m}m {this.state.time.s}s 
                                </div>
                                <div className="akad"> 
                                    { loading ? <div className="animated-background reception-loading"></div> : <Event name="Reception" data={event.reception} /> }
                                </div>
                                <div className="akad"> 
                                    { loading ? <div className="animated-background address-loading"></div> : <Event name="" data={event.address} /> }
                                </div> 
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
                        margin-top: 10px;
                        max-width: 172px;
                        min-height: 30px;
                    }
                    .reception-loading {
                        margin-top: 5px;
                        max-width: 250px;
                        min-height: 30px;
                    }
                    .address-loading {
                        margin-top: 5px;
                        max-width: 672px;
                        min-height: 30px;
                    }
                `}</style>
            </div> 
        );
    }
}

