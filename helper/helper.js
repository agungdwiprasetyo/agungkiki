import React from "react";
import "isomorphic-fetch";

const apiUrl = "http://api.agungdwiprasetyo.com/wedding";

export default class API extends React.Component {

    apiGet(urlPath, token) {
        let headers = { 
            'content-type': 'application/json'
        };

        if (token) {
            headers["Authorization"] = `Bearer ${token}`
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

    apiPost(urlPath, body) {
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