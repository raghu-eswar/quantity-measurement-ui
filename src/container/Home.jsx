import React, { Component } from 'react'
import '../styles/home.css'
import Quantity from '../components/Quantity.jsx'
import UnitValues from '../components/UnitValues.jsx'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
                        activeQuantity:this.props.quantities[0],
                        activeUnit: this.props.quantities[0].units[0]
                    }
    }

    selectQuantity = (quantity) => {
        this.setState({activeQuantity:quantity})
    }

    selectUnit = (unit) => {
        this.setState({activeUnit:unit})
    }

    render() {
        return ( 
            <main id="home">
                <div id="home-content">
                <span>Choose type</span>
                    <div id="home-content-quantities">
                        {this.props.quantities.map(quantity=><Quantity quantity={quantity} isActive={this.state.activeQuantity.name===quantity.name} key={quantity.name} onlick={this.selectQuantity}></Quantity>)}
                    </div>
                    <div id="home-content-values">
                        <UnitValues unitType="from" units={this.state.activeQuantity.units} onchange={this.selectUnit}></UnitValues>
                        <UnitValues unitType="to" units={this.state.activeQuantity.units} activeUnit={this.state.activeUnit}></UnitValues>
                    </div>
                </div>
            </main>
        );
    }
}
export default Home;