import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {devices} from './devices'

export const Header = styled.header `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 18vh;
    @media ${devices.mobileM} {
        height: 25vh;
    }
    @media ${devices.mobileS} {
        height: 20vh;
        font-size: 1rem;
    }
    @media ${devices.tablet}{
        height: 18vh;
    }
`
export const Nav = styled.nav `
    width: 70%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Poppins;
    font: icon;
    @media ${devices.mobileS} {
        height: 25%;
        font-size: 1rem;
    }
`
export const Logo = styled.div `
    width: 50%;
    font-weight: 600;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
`
export const NavLinks = styled.div `
    width: 50%;
    text-align: end;
    font-size: 1rem;
`
export const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export const Article = styled.article `
    height: 50%;
    width: 100%;
    background: #446DFF 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    @media ${devices.mobileM} {
       text-align: center;
    }
    @media ${devices.mobileS} {
       padding: 0 1% 0 1%;
    }
`

export const Welcome = styled.p `
    font-family: Montserrat;
    font: small-caption;
    font-weight: lighter;
    text-transform: capitalize;
    letter-spacing: 1.5px;
    font-size: 1.8rem;
    @media ${devices.mobileM} {
       font-size: 1.5rem;
    }
    @media ${devices.mobileS} {
       font-size: 1.3rem;
    }
`