import React, { PureComponent } from "react";
import Link from 'next/link';

export default class People extends PureComponent {

    render() {
        const { peoples } = this.props;

        return (
            <div className="peopleList">
                { peoples.map( (people) => (
                <div className="peopleItem" key={ people.id }>
                    <h2>{ people.name }</h2>
                    <div className="peopleDetails">
                        <strong>{ people.waNumber }</strong>
                    </div>
                    <div className="peopleDetails">
                        <strong>{ people.message }</strong>
                    </div>
                    <div className="peopleDetails">
                        { people.isAttend ? <strong>Presence</strong> : "Not presence" }
                    </div>
                </div>
                ) ) }

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
                    font-weight: bold;
                }
                .peopleDetails strong {
                    margin-right: 1em;
                }
                .peopleDetails a {
                    color: #ff6600;
                    text-decoration: none;
                }
                `}</style>

            </div>
        );
    }
}