import styled from 'styled-components';

export const QuantityName = styled.p `
    opacity: ${props=> props.isActive ? 1: 0.2};
    font-weight: ${props=> props.isActive ? 600: 100};
`

export const StyledDiv = styled.div `
    width: 35%;
    height: 50%;
    background: transparent url(${props=>require(`../images/${props.isActive? props.quantityName+'-hover':props.quantityName}-icon.svg`)}) no-repeat center;   
`

export const Quantity = styled.div `
    width: 20%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: ${props=> props.isActive ? props.styles.backgroundColor:'#FFFFFF'} 0% 0% no-repeat padding-box;
    color: ${props=> props.isActive ? props.styles.color: '#000000'};
    border: 1px solid ${props=> props.isActive? props.styles.color:'transparent'};
    border-radius: 7px;
    font-family: Montserrat;
    font: caption;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
        color: ${props=> props.styles.color};
        background: ${props=> props.styles.backgroundColor} 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border: 1px solid ${props=>props.styles.color};
    }

    &:hover ${QuantityName} {
        opacity: 1;
    }
    &:hover ${StyledDiv} {
        background: transparent url(${props=>require(`../images/${props.quantityName}-hover-icon.svg`)}) no-repeat center;   
    }
`