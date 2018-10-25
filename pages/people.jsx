import React from "react";
import Layout from "../components/Layout";
import People from "../components/people/people";
import Unauthorized from "../components/unauthorized";
import 'isomorphic-fetch';
import jsHttpCookie from 'cookie';
import jsCookie from 'js-cookie';
import Error from 'next/error';
import API from "../helper/helper";
import Link from 'next/link';

export default class extends React.Component {
    static async getInitialProps({ req, res, query }) {
        var status, data, page;

        try {
            let cookie = {};
            if (req) {
                if (req.headers) {
                    cookie = jsHttpCookie.parse(req.headers.cookie);
                }
            } else {
                var token = jsCookie.get("token");
                cookie.token = token;
            }

            page = query.page ? parseInt(query.page) : 1;

            const api = new API();

            const request = await api.apiGet(`invitation/all?page=${page}`, cookie.token);

            status = request.status;
            data = request.data!=null ? request.data : [];
        } catch (e) {
            console.log(e);
            status = 401;
            data = null;
            page = 1;
        }
        return { status, data, page }
    }

    render() {
        const { status, data, page } = this.props;

        return (
            <main>
                <Layout title={ "People Lists" } showBack={ true } />
                {status == 401 ? <Unauthorized /> : 
                    <div>
                        <People peoples={data}/>
                        <footer>
                            { page > 1 ? <Link href={`/people?page=${page-1}`} prefetch><a>&lt; Prev Page</a></Link>  : ""}
                            { page > 1 ? <span> | </span> : "" }
                            <Link href={`/people?page=${page+1}`} prefetch><a>Next Page &gt;</a></Link>
                        </footer>

                        <style jsx>{`
                            footer {
                                padding: 2em 1em;
                            }
                            footer a, span {
                                font-size: 1.5em;
                                font-weight: bold;
                                color: #ff6600;
                                text-decoration: none;
                            }
                        `}
                        </style>
                    </div>
                }
            </main>
        );
    }
}