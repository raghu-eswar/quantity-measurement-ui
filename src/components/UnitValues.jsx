import React from 'react'
import '../styles/unitValues.css'

function unitValues(props) {
    return ( 
        <div id="unit">
            <span>{props.unitType}</span>
            <input className="unit-value"/>
            <select id="unit-types">
                {props.units.map(unit=><option value={unit}>{unit}</option>)}
            </select>
        </div>
    );
}
export default unitValues;