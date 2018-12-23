import "isomorphic-fetch";

const apiUrl = "http://api.agungdwiprasetyo.com/wedding";

export default class API {
    constructor(token) {
        let headers = { 
            'content-type': 'application/json'
        };
        
        try {
            if (!token) {
                token = localStorage.getItem("token");
            }
        } catch {
            // no action
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

    GraphQL(query) {
        return fetch(`${apiUrl}/invitation/graphql`, {
            method: 'POST',
            headers: this.headers,
            body: query
          })
          .then( r => {
              return r.json();
          })
          .catch(err => {
            console.error('fetch error: ', err)
          });
    };

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