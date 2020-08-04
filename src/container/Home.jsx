import React, { Component } from 'react'
import Quantity from '../components/Quantity.jsx'
import UnitValues from '../components/UnitValues.jsx'
import * as Styled from '../styles/home.styled';
import Api from '../service/api'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  isLoading:true };
        this.unitOptionsRef = {from:React.createRef(), to:React.createRef()};
        this.unitValueRef = {from:React.createRef(), to:React.createRef()};
    }

    componentDidMount() {
        this.props.initapp(this.props.quantities, this.updateLoadingState)
    }

    componentDidUpdate(prevState) {
        if(this.state.fromValue && (prevState.fromValue !== this.state.fromValue || prevState.toValue !== this.state.toValue))
            this.updateHistory()
    }    

    updateLoadingState = () => {
        this.setState({
            isLoading:false,
            activeQuantity:this.props.quantities[0],
            fromUnit: this.props.quantities[0].units[0],
            toUnit: this.props.quantities[0].units[1],
            fromValue: 0,
            toValue: 0
        })
    }

    selectQuantity = (quantity) => {
        Api.getConvertedUnit(quantity.units[0], 0 ,quantity.units[1])
            .then(resp => 
                this.setState({ activeQuantity:quantity,
                fromUnit: quantity.units[0],
                toUnit: quantity.units[1],
                fromValue:0,
                toValue:resp.data.value.value
                }))
        this.unitOptionsRef["from"].current.selectedIndex = 0;
        this.unitOptionsRef["to"].current.selectedIndex = 0;
    }

    unitSelectionHandler = (event) => {
        let newToUnit ="";
        if(this.unitOptionsRef.from.current.value === this.unitOptionsRef.to.current.value) {
            newToUnit = (this.state.activeQuantity.units[0] ===  this.unitOptionsRef.from.current.value)? this.state.activeQuantity.units[1] : this.state.activeQuantity.units[0];
            setTimeout(()=>this.unitOptionsRef['to'].current.selectedIndex = 0, 0);
        } else {
            newToUnit = this.unitOptionsRef.to.current.value
        }
        this.setState({fromUnit:this.unitOptionsRef.from.current.value, toUnit:newToUnit})
        let isFrom = event.target.parentElement.id  !== 'from'
        let value = (isFrom)? this.unitValueRef['from'].current.value : this.unitValueRef['to'].current.value;
        let fromUnit = (isFrom)? this.unitOptionsRef.from.current.value : newToUnit;
        let toUnit = (isFrom)? newToUnit : this.unitOptionsRef.from.current.value;
        this.updateUnitValues(fromUnit, value, toUnit, isFrom);
    }

    updateHistory = () => {
        this.props.updateHistory(
            {name:this.state.activeQuantity.name,
            fromUnit:this.state.fromUnit, 
            toUnit:this.state.toUnit,
            fromValue:this.state.fromValue,
            toValue:this.state.toValue}
            )        
    }

    unitConversionHandler = (event) => {
        let isFrom = event.target.parentElement.id  === 'from'
        let value = event.target.value;
        let fromUnit = (isFrom)? this.state.fromUnit : this.state.toUnit;
        let toUnit = (isFrom)? this.state.toUnit : this.state.fromUnit;
        this.updateUnitValues(fromUnit, value, toUnit, isFrom);
    }

    updateUnitValues = (fromUnit, value, toUnit, isFrom) => {
        if(value) {
            Api.getConvertedUnit(fromUnit, value ,toUnit)
            .then(resp => 
                    this.setState({ 
                    fromValue:(isFrom)? value :Number.parseFloat(resp.data.value.value).toPrecision(15) ,
                    toValue: (isFrom)? Number.parseFloat(resp.data.value.value).toPrecision(15) : value
                })).catch(() => 
                    this.setState({ 
                    fromValue:'',
                    toValue:''}))
        }
        else {
            this.setState({ 
                fromValue:'',
                toValue:''})
        }
    }

    render() {
        if(this.state.isLoading){
            return(
                <>
                    <Styled.Loader delay={'0s'}></Styled.Loader>
                    <Styled.Loader delay={'0.3s'}></Styled.Loader>
                    <Styled.Loader delay={'0.6s'}></Styled.Loader>
                    <Styled.Loader delay={'0.9s'}></Styled.Loader>
                    <Styled.Loader delay={'1.2s'}></Styled.Loader>
                    <Styled.Loader delay={'1.5s'}></Styled.Loader>
                    <Styled.Loader delay={'1.8s'}></Styled.Loader>
                    <Styled.Loader delay={'2.1s'}></Styled.Loader>
                    <Styled.Loader delay={'2.4s'}></Styled.Loader>
                    <Styled.Loader delay={'2.7s'}></Styled.Loader>                    
                </>
            )
        }
        return ( 
            <Styled.Home>
                <Styled.Content>
                    <Styled.Title>Choose type</Styled.Title>
                    <Styled.Quantities>
                        {this.props.quantities.map(quantity=><Quantity quantity={quantity} isActive={this.state.activeQuantity.name===quantity.name} key={quantity.name} onlick={this.selectQuantity}></Quantity>)}
                    </Styled.Quantities>
                    <Styled.QuantityValues>
                        <UnitValues unitType="from" value={this.state.fromValue} units={this.state.activeQuantity.units} unitValueRef={this.unitValueRef} unitOptionsRef={this.unitOptionsRef} onValueChange = {this.unitConversionHandler} onUnitChange={this.unitSelectionHandler}></UnitValues>
                        <UnitValues unitType="to" value={this.state.toValue} units={this.state.activeQuantity.units} unitValueRef={this.unitValueRef} unitOptionsRef={this.unitOptionsRef} onValueChange = {this.unitConversionHandler} onUnitChange={this.unitSelectionHandler} fromUnit={this.state.fromUnit}></UnitValues>
                    </Styled.QuantityValues>
                </Styled.Content>
            </Styled.Home>
        );
    }
}
export default Home;