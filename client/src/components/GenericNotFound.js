import React from 'react'
import { Link } from 'react-router-dom';

function GenericNotFound() {
    return (
        <div className="four0four">
            <img src="https://static.collectui.com/shots/2421479/daily-ui-24-error-404-large"/>
            <Link to="/">
                <div>Go Home</div>
            </Link>
        </div>
    )
}

export default GenericNotFound
