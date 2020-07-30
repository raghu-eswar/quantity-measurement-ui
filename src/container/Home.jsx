import React, { Component } from 'react'
import Quantity from '../components/Quantity.jsx'
import UnitValues from '../components/UnitValues.jsx'
import * as Styled from '../styles/home.styled';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
                        activeQuantity:this.props.quantities[0],
                        fromUnit: this.props.quantities[0].units[0],
                        toUnit: this.props.quantities[0].units[1]
                    };
        this.unitOptionsRef = {from:React.createRef(), to:React.createRef()};
    }

    componentDidMount() {
        this.updateHistory()
    }

    componentDidUpdate() {
        this.updateHistory()
    }    

    selectQuantity = (quantity) => {
        this.setState({activeQuantity:quantity,
                        fromUnit: quantity.units[0],
                        toUnit: quantity.units[1]})
        this.unitOptionsRef["from"].current.selectedIndex = 0;
    }

    selectUnits = () => {
        this.setState({fromUnit:this.unitOptionsRef.from.current.value, toUnit:this.unitOptionsRef.to.current.value})
    }

    updateHistory = () => {
        this.props.updateHistory({name:this.state.activeQuantity.name,fromUnit:this.state.fromUnit, toUnit:this.state.toUnit})        
    }

    render() {
        return ( 
            <Styled.Home>
                <Styled.Content>
                    <Styled.Title>Choose type</Styled.Title>
                    <Styled.Quantities>
                        {this.props.quantities.map(quantity=><Quantity quantity={quantity} isActive={this.state.activeQuantity.name===quantity.name} key={quantity.name} onlick={this.selectQuantity}></Quantity>)}
                    </Styled.Quantities>
                    <Styled.QuantityValues>
                        <UnitValues unitType="from" units={this.state.activeQuantity.units} _ref={this.unitOptionsRef} onchange={this.selectUnits}></UnitValues>
                        <UnitValues unitType="to" units={this.state.activeQuantity.units} _ref={this.unitOptionsRef} onchange={this.selectUnits} fromUnit={this.state.fromUnit}></UnitValues>
                    </Styled.QuantityValues>
                </Styled.Content>
            </Styled.Home>
        );
    }
}
export default Home;