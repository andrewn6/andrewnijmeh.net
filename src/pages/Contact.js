import React from 'react';
import { Component } from 'react';

import Footer from '../components/Footer'


class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "andrewnijmeh1@gmail.com",
            discord: "discord.com/users/388788632686690305",
            twitter: "twitter.com/Flop"

        }
    }
    

    render() {
        return(
            <div>
            <h1>My Social Medias.</h1>
            <h3>Feel free to reach out to me on any of these platforms.</h3>
            </div>
        );
    }

    
}

export default Contact;