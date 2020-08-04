import styled, { keyframes } from 'styled-components';
import {devices} from './devices'

export const Home = styled.main `
    height: 82vh;
    display: flex;
    justify-content: center;
    background: #F5F6FA 0% 0% no-repeat padding-box;
    @media ${devices.mobileM} {
        height: 90vh;
    }
    @media ${devices.tablet}{
        height: 82vh;
    }
    @media ${devices.mobileS} {
        height: 80vh;
    }
`

export const Content = styled.div `
    width: 55%;
    height: 55%;
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    @media ${devices.iPad} {
        width: 80%; 
    }

    @media ${devices.mobileS} {
        font-size: 1rem;
    }
    @media ${devices.mobileM} {
        height: 90%;
    }
`

export const Title = styled.span `
    font-family: Montserrat;
    font: caption;
    font-size: medium;
    color: #000000;
    text-transform: uppercase;
    margin-left: 0;
`

export const Quantities = styled.div `
    margin: 1vmax 0 1vmax 0;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12vmax, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(12vmax, 1fr));
    justify-content: center;
    align-items: center;
    column-gap: 2%;
    row-gap: 10%;

    @media ${devices.iPad} {
        column-gap: 4%;
    }
    @media ${devices.mobileM} {
        grid-template-columns: repeat(auto-fit, minmax(17vmax, 1fr));
        margin: 2vmax 0 2vmax 0;
    }
    @media ${devices.mobileS} {
        grid-template-columns: repeat(auto-fit, minmax(15vmax, 1fr));
        margin: 3vmax 0 3vmax 0;
    }
`

export const QuantityValues = styled.div `
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${devices.iPad} {
        height: 16vh;
    }
    @media ${devices.mobileM} {
        height: 25vh;
    }
    @media ${devices.mobileS} {
        flex-direction: column;
        align-items: center;
        height: 35vh;
    }
    
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
