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
                {
                    id: 1,
                    title: 'Quiz App',
                    subTitle: 'A quizz app centered around math with many features',
                    link: "github.com/andrewnijmeh",
                    imgSrc: utilitybot,
                    selected: false
    


                }
            ]
        }
    }
}   

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
    }


export default Carousel;