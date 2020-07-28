import React from 'react'
import * as Styled from '../styles/header.styled';

function Header(props) {
    return ( 
        <Styled.Header>
            <Styled.Nav>
                <Styled.Logo>
                    <Styled.NavLink to="/">
                        {props.name}
                    </Styled.NavLink>
                </Styled.Logo>
                <Styled.NavLinks>
                    <Styled.NavLink to={props.navLinks.link}>
                        {props.navLinks.name}
                    </Styled.NavLink>
                </Styled.NavLinks>
            </Styled.Nav>
            <Styled.Article>
                <Styled.Welcome>Welcome to Quantity Measurement</Styled.Welcome>
            </Styled.Article>
        </Styled.Header>
    );
}
export default Header;