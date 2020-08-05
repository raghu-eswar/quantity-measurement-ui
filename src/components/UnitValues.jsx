import React from 'react'
import * as Styled from '../styles/unitValues.styled';

function UnitValues(props) {

    const changeFocus = (event) => {
        if(event.keyCode === 13) {
            let nextField = (props.unitType === 'from')? props.unitValueRef.to : props.unitValueRef.from;
            nextField.current.focus()
        }
    }

    const validateInput = (event) => {
        let value = event.target.value;
        if(value.length < 21) {
            if((value.match(/e/g) || []).length>1 || (value.match(/\./g) || []).length>1 || (value.indexOf('e') === 0 )) alert("invalid input ! ... ")
            else if ((props.activeQuantity !== 'temperature' && value < 0) || value.indexOf('-') > 0) alert("invalid input ! ... ")
            else if (isNaN(value) && value !== '-' && value.indexOf('e') !== value.length-1) alert("invalid input ! ... ")
            else props.onValueChange(event)
        }
        else alert("can't enter more than 20 digits ...")
    }

    return ( 
        <Styled.UnitContainer id={props.unitType}>
            <Styled.Title>
                {props.unitType}
            </Styled.Title>
            <Styled.UnitValue ref={props.unitValueRef[props.unitType]} 
                            autoFocus={props.unitType === 'from'} onKeyUp={changeFocus} 
                            onChange={validateInput} 
                            value={props.value} 
                            type="text">
            </Styled.UnitValue>
            <Styled.UnitTypes ref={props.unitOptionsRef[props.unitType]} onChange={(event)=>props.onUnitChange(event)}>
                {props.units.map(unit=> {
                    if(unit !== props.fromUnit)
                        return <option value={unit}>{unit}</option>
                    return null;
                })}
            </Styled.UnitTypes>
        </Styled.UnitContainer>
    );
}
export default UnitValues;