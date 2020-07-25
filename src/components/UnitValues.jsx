import React from 'react'
import '../styles/unitValues.css'

function unitValues(props) {
    return ( 
        <div id="unit">
            <span>{props.unitType}</span>
            <input className="unit-value"/>
            <select id="unit-types">
                {props.units.map(unit=> {
                    if(unit !== props.activeUnit)
                        return <option value={unit}>{unit}</option>
                    return null;
                })}
            </select>
        </div>
    );
}
export default unitValues;