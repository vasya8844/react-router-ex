import React, { Component } from 'react';
import Card from './Card';

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = this.byCategory(props.params.category)
    }
    componentDidUpdate(prevProps, prevState) {
        const category = this.props.params.category
        if (prevState.category !== category) {
            this.setState(this.byCategory(category))
        }
    }
    byCategory(category) {
        const cards = this.props.cards.filter((card) => card.category === category)
        return {
            category: category,
            cards: cards
        }
    }
    render() {
        return <div className="Grid animated bounceInUp">
            {
            this.state.cards.map((card) => (
                <Card 
                duration={150} 
                key={card.id} 
                card={card} 
                />
            ))
            }
        </div>
    }
}
 
export default Category;