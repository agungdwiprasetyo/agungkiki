import "isomorphic-fetch";
import jsCookie from 'js-cookie';

const apiUrl = "http://api.agungdwiprasetyo.com/wedding";

export default class API {
    constructor(token) {
        let headers = { 
            'content-type': 'application/json'
        };
        
        if (!token) {
            token = jsCookie.get("token");
        }
        headers["Authorization"] = `Bearer ${token}`

        this.headers = headers;
    }

    isAuthenticate() {
        return fetch(`${apiUrl}/invitation/auth`, {
            method: 'GET',
            headers: this.headers
        })
        .then(response => {
            return response.json();
        });
    }

    GET(urlPath) {
        return fetch(`${apiUrl}/${urlPath}`, {
                method: 'GET',
                headers: this.headers
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
            headers: this.headers,
            body: JSON.stringify(body)
          })
          .then( r => {
              return r.json();
          })
          .catch(err => {
            console.error('fetch error: ', err)
          });
    };

    DELETE(urlPath, body) {
        return fetch(`${apiUrl}/${urlPath}`, {
            method: 'DELETE',
            headers: this.headers,
            body: JSON.stringify(body)
          })
          .then( r => {
              return r.json();
          })
          .catch(err => {
            console.error('fetch error: ', err)
          });
    }
}