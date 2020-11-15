import React from 'react';

import Card from '../components/Card';

import utilitybot from '../assets/images/utilitybot.png';


class Carousel extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Utility Bot',
                    subTitle: 'A discord bot with many integerations features and moderation.',
                    imgSrc: utilitybot,
                    link: 'https://utilitybot.co',
                    selected: false

                }
            ]
        }
    }
}