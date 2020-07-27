import React, { Component } from 'react'
import '../styles/home.css'
import Quantity from '../components/Quantity.jsx'
import UnitValues from '../components/UnitValues.jsx'

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

    selectQuantity = (quantity, ref) => {
        this.setState({activeQuantity:quantity,
                        fromUnit: quantity.units[0],
                        toUnit: quantity.units[1]})
        this.unitOptionsRef["from"].current.selectedIndex = 0;
    }

    selectUnits = () => {
        this.setState({fromUnit:this.unitOptionsRef.from.value, toUnit:this.unitOptionsRef.to.value})
    }

    updateHistory = () => {
        this.props.updateHistory({name:this.state.activeQuantity.name,fromUnit:this.state.fromUnit, toUnit:this.state.toUnit})        
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
                        <UnitValues unitType="from" units={this.state.activeQuantity.units} _ref={this.unitOptionsRef} onchange={this.selectUnits}></UnitValues>
                        <UnitValues unitType="to" units={this.state.activeQuantity.units} _ref={this.unitOptionsRef} onchange={this.selectUnits} fromUnit={this.state.fromUnit}></UnitValues>
                    </div>
                </div>
            </main>
        );
    }
}
export default Home;