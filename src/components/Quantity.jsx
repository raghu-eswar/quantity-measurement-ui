import React, { Component } from 'react'
import '../styles/quantity.css'

class Quantity extends Component {

    shouldComponentUpdate(nextProps) {
        return (this.props.isActive !== nextProps.isActive)
    }

    render() {
        return ( 
            <button ref={this.props.quantity.name} className={this.props.isActive ? `quantity ${this.props.quantity.name}-active` : `quantity`} 
                    id={this.props.quantity.name} onClick={this.props.onlick.bind(this, this.props.quantity)}>
                <div></div>
                <p>{this.props.quantity.name}</p>
            </button>
        );
    }
}
export default Quantity;