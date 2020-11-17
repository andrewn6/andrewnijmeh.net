import React, { Component } from 'react';

import Carousel from './components/Carousel';
import css from './src/css/projects.css';

class ProjectsPage extends Component{

    render(){
        return(
            <div>
                <div className="project-title">
                    <div className="project-subtitle">
                        <h3>Here are a list of my projects with a link to the github repository.</h3>
                    </div>
                </div>  
            </div>

        );
    }
}


export default ProjectsPage;