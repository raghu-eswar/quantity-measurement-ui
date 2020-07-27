import React from 'react'
import '../styles/unitValues.css'

function UnitValues(props) {
    return ( 
        <div id="unit">
            <span>{props.unitType}</span>
            <input type="number" className="unit-value"/>
            <select id="unit-types" ref={props._ref[props.unitType]} onChange={props.onchange}>
                {props.units.map(unit=> {
                    if(unit !== props.fromUnit)
                        return <option value={unit}>{unit}</option>
                    return null;
                })}
            </select>
        </div>
    );
}
export default UnitValues;