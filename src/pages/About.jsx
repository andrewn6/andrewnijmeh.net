import React from 'react';
import { Component } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';



function AboutPage(props) {
    
     
    return(
        <div className="about">
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Andrew Nijmeh. I'm a backend engineer/developer with experience with many framework tools and technologies.</p>
                <p>I know many frameworks and tools such as, Node.js, React.js, Python, Flask, Express, Postgres, Docker, Docker-Compose, Git Github and lastly CI/CD</p>
                <p>I'm currently working on a few projects, utility bot a large scale discord bot with many features. I'm also working on a quiz app with Aditya Kapoor (TheCodingGuru)</p>
                <p>My dream one day is to be a open source maintainer and a project leader.</p>
            </Content>
        </div>
        );
    }
}

export default AboutPage;