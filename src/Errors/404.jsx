import React from 'react';
import { Component } from 'react';
import PageNotFound from '../assets/images/404.png';
import { Link } from 'react-router';

class Error404 extends Component{

    render(){
        return(
            <div>
            <img src={PageNotFound} />
            <p style={{textAlign: "center"}}>
                <Link to="/">Go to Home </Link>
            </p>

        </div>
        );
        
    }
}

export default Error404;