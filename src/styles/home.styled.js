import styled, { keyframes } from 'styled-components';

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

const Load = keyframes`
    0%{transform: rotate(90deg) translateX(40px);  visibility: visible;}
    5%{background-color: #ffd700;}
    10%{background-color: #8b0000;}
    15%{background-color: #8a2be2;}
    20%{background-color: #00ffff;}
    25%{background-color: #ffa500;}
    30%{background-color: #008000;}
    35%{background-color: #ff00bf;}
    40%{background-color: #800080;}
    50%{transform: rotate(2160deg) translateX(80px);}
    55%{background-color: #ffd700;}
    60%{background-color: #8b0000;}
    65%{background-color: #8a2be2;}
    70%{background-color: #00ffff;}
    75%{background-color: #ffa500;}
    85%{background-color: #7fff00;}
    100%{background-color: #ffd700;}
`

export const Loader = styled.span `
    width: 10px;
    height: 10px;
    background-color: #0000ff;
    border-radius: 50%;
    position: absolute;
    top:50%;
    left: 50%;
    visibility: hidden;
    animation: ${Load} 10s linear infinite;
    animation-delay : ${props=> props.delay};
`
