import React, { Component } from 'react'
import '../styles/quantity.css'

class Quantity extends Component {

    constructor(props) {
        super(props);
        this.state = {isActive:(this.props.quantity.name===this.props.activeUnit)}
    }

    componentDidMount() {
        if(this.state.isActive) {
            this.refs[`${this.props.quantity.name}`].focus();
        }
    }

    render() {
        return ( 
            <button ref={this.props.quantity.name} className="quantity" id={this.props.quantity.name} onClick={this.props.onlick.bind(this, this.props.quantity)}>
                <div></div>
                <p>{this.props.quantity.name}</p>
            </button>
        );
    }
}
export default Quantity;