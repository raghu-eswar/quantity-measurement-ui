import React, { Component } from 'react'
import * as Styled from '../styles/quantity.styled';

class Quantity extends Component {

    shouldComponentUpdate(nextProps) {
        return (this.props.isActive !== nextProps.isActive)
    }

    render() {
        return ( 
            <Styled.Quantity onClick={this.props.onlick.bind(this, this.props.quantity)} quantityName={this.props.quantity.name} styles={this.props.quantity.styles} isActive={this.props.isActive}>
                <Styled.StyledDiv quantityName={this.props.quantity.name} isActive={this.props.isActive}/>
                <Styled.QuantityName isActive={this.props.isActive}>
                    {this.props.quantity.name}
                </Styled.QuantityName>
            </Styled.Quantity>
        );
    }
}
export default Quantity;