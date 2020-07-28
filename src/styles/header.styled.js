import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 18vh;
`
export const Nav = styled.nav `
    width: 70%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Poppins;
    font: icon;
`
export const Logo = styled.div `
    width: 50%;
    font-size: 2em;
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
export const NavLink = styled(Link)
`
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
`

export const Welcome = styled.p `
    font-family: Montserrat;
    font: small-caption;
    font-weight: lighter;
    text-transform: capitalize;
    letter-spacing: 1.5px;
    font-size: 1.5rem;
`