import React from 'react'
import * as Styled from '../styles/unitValues.styled';

function UnitValues(props) {
    return ( 
        <Styled.UnitContainer>
            <Styled.Title>
                {props.unitType}
            </Styled.Title>
            <Styled.UnitValue type="number"/>
            <Styled.UnitTypes ref={props._ref[props.unitType]} onChange={props.onchange}>
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