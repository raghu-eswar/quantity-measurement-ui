import React from 'react'
import * as Styled from '../styles/unitValues.styled';

function UnitValues(props) {
    return ( 
        <Styled.UnitContainer id={props.unitType}>
            <Styled.Title>
                {props.unitType}
            </Styled.Title>
            <Styled.UnitValue ref={props.unitValueRef[props.unitType]} onChange={(event) => props.onValueChange(event)} value={props.value} type="number"/>
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