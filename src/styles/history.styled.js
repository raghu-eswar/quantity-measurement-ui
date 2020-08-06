import styled from 'styled-components'
import {devices} from './devices'

export const History = styled.div `
    height: 82vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;
    @media ${devices.mobileS} {
        padding: 0 2% 0 2%       
    }
`

export const Content = styled.div `
    width: 60%;
    height: 92%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    @media ${devices.iPad} {
        width: 90%;
    }
    @media ${devices.mobileS} {
        width: 100%;
    }
`

export const Title = styled.h2 `
    margin: 2% auto 1% auto;
    height: 7%;
    text-transform: capitalize;
    font-family: Poppins;
    font: caption;
    letter-spacing: 1.5px;
    font-size: 1.5rem;
    @media ${devices.iPad} {
        height: 5%;
    }

    @media ${devices.mobileS} {
        margin: 2% auto 1% 15vw;
        font-size: 1.3rem;
    }
`

export const Heading = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media ${devices.mobileS} {
        grid-template-columns: repeat(2, minmax(70vw, 1fr));
    }
`

export const Record = styled.div `
    height: 8%;
    min-height: 8vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10%;
    align-items: center;
    @media ${devices.iPad} {
        min-height: 6vmax;
    }
    @media ${devices.mobileS} {
        min-height: 5vmax;
    }
`

export const Cell = styled.div `
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #A9A9A9; 
    margin-top: 1%;
    @media ${devices.mobileS} {
       min-width:70vw;
       width: auto;
       font-size: 0.8rem;
    }
`

export const Unit = styled.span `
   padding: 0 5% 0 5%;
`

export const Value = styled.span `
   padding-left: 4%;
`

export const EmptyHistory = styled.p `
    margin-top: 10%;
    text-align: center;
    text-transform: capitalize;
    font-family: Poppins;
    font: caption;
    font-size: 2rem;
    color: #d3d3d3;
`