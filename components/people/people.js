import React, { PureComponent } from "react";
import NProgress from 'nprogress';
import Pagination from "react-js-pagination";

import API from "../../helper/helper";

export default class People extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            peoples: [],
            page: props.page,
            limit: 5,
            totalPerson: 0,
            isLoad: true
        }

        this.api = new API(props.token);
        this.fetchPerson = this.fetchPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
        
        this.fetchPerson(props.page);
    }

    fetchPerson(page) {
        this.setState({isLoad: true});
        this.api.GET(`invitation/all?page=${page}&limit=${this.state.limit}`).then(response => {
            let data = response.data != null ? response.data : [];
            this.setState({
                peoples: data,
                page: page,
                totalPerson: response.meta.totalRecords,
                isLoad: false
            });
        });
    }

    deletePerson(waNumber) {
        let ok = confirm("Are you sure?");
        if (ok) {
            this.setState({isLoad: true});
            let payload = [waNumber];
            this.api.DELETE("invitation/remove", payload).then(response => {
                this.fetchPerson();
                this.setState({isLoad: false});
                alert("Success");
            }).catch(err => {
                NProgress.done();
            });
        }
    }

    render() {
        let { 
            peoples, 
            page, 
            limit,
            isLoad,
            totalPerson
        } = this.state;

        return (
            <div className="content-wrapper">
                <div className="col-md-12 text-center">
                    <div className="section-heading">
                        <h3>People List</h3>
                        <p className="text-muted"></p>
                        <hr />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="peopleList">
                        { peoples.map( (people) => (
                            <div className="col-xs-12 peopleItem" key={ people.id }>
                                <div className="col-xs-10">
                                    <h3>{ people.name }</h3>
                                    <div className="peopleDetails">
                                        Wa Number: <strong>{ people.waNumber }</strong>
                                    </div>
                                    <div className="peopleDetails">
                                        Relation: <strong>{ people.relation }</strong>
                                    </div>
                                    <div className="peopleDetails">
                                        Message: <strong>{ people.message }</strong>
                                    </div>
                                    <div className="peopleDetails">
                                        { people.isAttend ? <strong>Presence</strong> : "Not presence" }
                                    </div>
                                    <div className="peopleDetails">
                                    {(new Date(people.created)).toLocaleDateString('en-US', { 
                                        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
                                        hour: 'numeric', minute: 'numeric', second: 'numeric'
                                    })}
                                    </div>
                                </div>

                                <div className="col-xs-2 text-right d-flex align-items-center">
                                    <button onClick={() => this.deletePerson(people.waNumber)} className="btn btn-danger btn-xs">
                                        <i className="fa fa-times"></i> Remove
                                    </button>
                                </div>
                            </div>
                            )
                        ) }
                    </div>
                    
                    {isLoad ? <div className="loader"></div> : ""}
                    <div className="text-center">
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={limit}
                            totalItemsCount={totalPerson}
                            onChange={this.fetchPerson}
                        />
                    </div>
                </div>

                <style jsx>{`
                    .peopleList {
                        padding: 0 1em;
                    }
                    .peopleItem {
                        padding: 1em 0;
                        border-bottom: 1px solid rgba(0,0,0,0.1);
                    }
                    h2 {
                        font-size: 1.1em;
                        font-weight: 400;
                        margin: 0;
                        margin-bottom: 0.5em;
                    }
                    h2 a {
                        color: #333;
                        text-decoration: none;
                    }
                    h2 a:hover {
                        text-decoration: underline;
                    }
                    .peopleDetails {
                        font-size: 0.9em;
                    }
                    .peopleDetails strong {
                        margin-right: 1em;
                    }
                    .peopleDetails a {
                        color: #ff6600;
                        text-decoration: none;
                    }

                    .actions {
                        min-height: 100%;
                        min-height: 100vh;

                        display: flex;
                        align-items: center;
                    }

                    footer {
                        padding: 2em 1em;
                        text-align: right;
                        margin-right: 50px;
                    }
                    footer a, span {
                        font-size: 1.5em;
                        font-weight: bold;
                        color: #ff6600;
                        text-decoration: none;
                    }
                `}</style>

            </div>
        );
    }
}