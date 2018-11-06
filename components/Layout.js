import React, {PureComponent} from "react";
import Head from "next/head";

import '../styles/style.scss';

export default class Layout extends PureComponent {
    render() {
        const { title, description } = this.props;

        return(
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="keywords" content="Agung Kiki Wedding Invitation" />
                <link href="https://agungdp.storage.googleapis.com/wedding/static/css/bootstrap.css" type="text/css" rel="stylesheet" media="all" />
                <link href="https://storage.googleapis.com/agungdp/wedding/static/css/nprogress.css" type="text/css" rel="stylesheet" media="all" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.28.4/sweetalert2.min.css" type="text/css" rel="stylesheet" media="all" />  
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /> 
                <link rel="stylesheet" href="https://agungdp.storage.googleapis.com/wedding/static/css/swipebox.css" /> 
                <link href="//fonts.googleapis.com/css?family=Tulpen+One" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=KoHo:300" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Euphoria+Script&amp;subset=latin-ext" rel="stylesheet" />
                <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css' />
                <link rel="shortcut icon" href="https://agungdp.storage.googleapis.com/wedding/static/iconheader.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="manifest" href="/static/manifest.webmanifest" />
                <meta name="theme-color" content="#ff6600" />
                <link rel="apple-touch-icon" href="https://agungdp.storage.googleapis.com/wedding/static/iconheader.png" />
                <meta name="apple-mobile-web-app-title" content="Agung Kiki Wedding" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
            </Head>
        );
    }
}