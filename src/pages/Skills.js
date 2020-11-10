import React from 'react';
import { Component } from 'react';
import Content from '../components/Content'

export default class Skills extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Skills",
            
            frameworks: {
                title: "Frameworks",
                subtitle: "Here are a list"
            },

        }
    }
}