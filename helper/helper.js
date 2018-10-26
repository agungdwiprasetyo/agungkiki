import React from "react";
import "isomorphic-fetch";
import NProgress from 'nprogress';

const apiUrl = "http://api.agungdwiprasetyo.com/wedding";

export default class API extends React.Component {
    constructor(props) {
        super(props);
    }

    GET(urlPath) {
        let headers = { 
            'content-type': 'application/json'
        };

        if (this.props) {
            headers["Authorization"] = `Bearer ${this.props}`
        };

        return fetch(`${apiUrl}/${urlPath}`, {
                method: 'GET',
                headers: headers
            })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                return Promise.reject(new Error(err));
            });
    };

    POST(urlPath, body) {
        return fetch(`${apiUrl}/${urlPath}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body)
          })
          .then( r => {
              return r.json();
          })
          .catch(err => {
            console.error('fetch error: ', err)
          });
    };

    render() {
        return (
            <div></div>
        )
    }
}