import React from 'react';
import { Component } from 'react';


function AboutPage(props){

    return(
        <div>
            <Hero title={props.title}> 
            <Content>
                <p>Hey there! my name is Andrew. I'm a developer who uses and loves Docker, Docker-Compose mySQL, Python, Flask, React.JS, Express JS, and NodeJS</p>
                <p>I'm currently learning CI/CD, and working on a few projects..</p>
                <p>I'm currently workking/building on a large scale discord bot called utilitybot which has many integrations and features. I'm also working on a quiz app which is going to be using MongoDB, Flask, React, and ExpressJS</p>
            </Content>
            </Hero>
        </div>
    );
}

export default AboutPage;