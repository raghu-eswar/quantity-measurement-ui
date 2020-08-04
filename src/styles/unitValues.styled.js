import styled from 'styled-components';
import {devices} from './devices'

export const UnitContainer = styled.div `
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    font-family: Montserrat;
    font: caption;
    letter-spacing: 0px;
    color: #000000;
    @media ${devices.iPad} {
        width: 45%;
    }
    @media ${devices.mobileS} {
        width: 80%;
        height: 45%;
    }
`

export const Title = styled.span `
    flex: 1;
    text-transform: uppercase;
`

export const UnitValue = styled.input `
    width: 100%;
    flex: 2;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E5DAFC;
    outline: none;
    font-size: larger;
    text-indent: 5%;
`
export const UnitTypes = styled.select `
    width: 100%;
    flex: 2;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E7DCFE;
    border-radius: 3px;
    text-transform: capitalize;
    outline: none;  
    cursor: pointer;  
`