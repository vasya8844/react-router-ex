import React, { Component } from 'react';

class Category extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return <h1>{this.props.match.params.category}</h1>
    }
}
 
export default Category;