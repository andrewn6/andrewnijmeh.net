import React, { Component } from 'react';

import Carousel from '../components/Carousel';
import css from '../css/projects.css';

class ProjectsPage extends Component{

    render(){
        return(
            <div>
                <div className="project-title">
                    <h1>My projects</h1>
                    
                    <div className="project-subtitle">

                        <h3>Here are a list of my projects with a link to the github repository.</h3>
                         <Carousel />
                    </div>

                </div>  
            </div>

        );
    }
}


export default ProjectsPage;