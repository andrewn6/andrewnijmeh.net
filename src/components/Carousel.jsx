import React from 'react';

import Card from '../components/Card';

import utilitybot from '../assets/images/utilitybot.png';
import { render } from '@testing-library/react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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

                },
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

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
}


    makeItems = (items) => {
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(items.id, e))} key={item.id} />
        })
    }
    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

export default Carousel;