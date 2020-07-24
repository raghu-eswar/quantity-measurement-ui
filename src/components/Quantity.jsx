import React, { Component } from 'react'
import '../styles/quantity.css'

class Quantity extends Component {

    componentDidMount() {
        if(this.props.isActive) {
            this.refs[`${this.props.quantity.name}`].classList.add(`${this.props.quantity.name}-active`);
        }
    }

    componentDidUpdate() {
        if(this.props.isActive) {
            this.refs[`${this.props.quantity.name}`].classList.add(`${this.props.quantity.name}-active`);
        } else {
            this.refs[`${this.props.quantity.name}`].classList.remove(`${this.props.quantity.name}-active`);
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