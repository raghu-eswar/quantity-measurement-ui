import styled from 'styled-components';

export const Home = styled.main `
    height: 82vh;
    display: flex;
    justify-content: center;
    background: #F5F6FA 0% 0% no-repeat padding-box;
`

export const Content = styled.div `
    width: 50%;
    height: 55%;
    margin-top: 4%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.span `
    font-family: Montserrat;
    font: caption;
    font-size: medium;
    color: #000000;
    text-transform: uppercase;
    margin-left: 4%;
`

export const Quantities = styled.div `
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const QuantityValues = styled.div `
    flex: 2.5;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`