import React from 'react';
import { Component } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';



class AboutPage extends Component {
    
    render(){
        return(
            <div>
                <Hero title={props.title} />
                <Content>
                    <p>Hello, my name is Andrew Nijmeh. I'm a backend engineer/developer with experience with many framework tools and technologies.</p>
                    <p>I know many frameworks and tools such as, Node.js, React.js, Python, Flask, Express, Postgres, Docker, Docker-Compose, Git Github and lastly CI/CD</p>
                </Content>
            </div>
        );
    }
}