import React, {PureComponent} from "react";
import Link from 'next/link';

export default class Header extends PureComponent {
    render() {
        return(
            <div className="about w3-agile">
                <div className="container">
                    <div className="col-xs-12 text-center">
                        <div className="col-xs-4">
                            <Link href={`/`} prefetch><a>HOME</a></Link>
                        </div>
                        <div className="col-xs-4">
                            <Link href={`/people`} prefetch><a>PEOPLE</a></Link>
                        </div>
                        <div className="col-xs-4">
                            <Link href={`/event`} prefetch><a>EVENT</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}