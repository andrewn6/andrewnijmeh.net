import React from 'react';
import { Component } from 'react';
import Content from '../components/Content'

import css from './src/css/skills.css'

class SkillsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Skills",
            
            frameworks: {
                title: "Frameworks",
                subtitle: "Here are a list of frameworks I use, React, Express, Flask, Node.js."
            },

            tools: {
                title: "Tools",
                subtitle: "Here are a list of tools I use. Python, Git, Github, Visual Studio Code, Linux, Docker, Nginx, Docker-Compose"
            },
            skills: {
                title: "Skills",
                subtitle: "Here are a set of skills that I have. I have leadership, innovative and creativity."
            }

        }
    }

    render(){
        return(
            <div>
                <h1>test</h1>
            </div>
        );
    }
    

    
}

export default Skills;