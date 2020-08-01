import styled from 'styled-components'

export const History = styled.div `
    height: 82vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;
`

export const Content = styled.div `
    width: 50%;
    height: 92%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2 `
    margin: 2% auto 1% auto;
    height: 7%;
    text-transform: capitalize;
`

export const Heading = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Record = styled.div `
    height: 8%;
    min-height: 8vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10%;
    align-items: center;
`

export const Cell = styled.div `
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black; 
    margin-top: 1%;
`

export const Unit = styled.span `
   padding-right: 5%;
`

export const Value = styled.span `
   padding-left: 8%;
`