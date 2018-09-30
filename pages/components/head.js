import React, {PureComponent} from "react";
import Head from "next/head";

class HeadComponent extends PureComponent {
    render() {
        return(
            <Head>
                <title>Agung & Kiki Wedding</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="keywords" content="Bouquet Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
                    SmartPhone Compatible web template, free WebDesigns for Nokia, Samsung, LG, Sony Ericsson, Motorola web design" />
                <link href="static/css/bootstrap.css" type="text/css" rel="stylesheet" media="all" />
                <link href="static/css/style.css" type="text/css" rel="stylesheet" media="all" />  
                <link href="static/css/font-awesome.css" rel="stylesheet" /> 
                <link rel="stylesheet" href="static/css/swipebox.css" /> 
                <link href="//fonts.googleapis.com/css?family=Tulpen+One" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=KoHo:300" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Euphoria+Script&amp;subset=latin-ext" rel="stylesheet" />
                <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css' />
                <link rel="shortcut icon" href="static/images/iconheader.png" />
            </Head>
        );
    }
}

export default HeadComponent;