import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react';

class Error404 extends Component{

    render(){
        <div>
            <img src={PageNotFound} />
            <p style={{textAlign: "center"}}>
                < <Link to="/">Go to Home </Link>
            </p>

        </div>
    }
}

export default Error404;