import styled from "styled-components";

export const Container = styled.body`
    
`;

export const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CoinList = styled.ul`
    
`;

export const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

export const Coin = styled.li`
    background-color: white;
    color:${props => props.theme.bgColor};
    
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        padding: 20px;
        transition: color 0.2s ease-in;
        display: block;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;

export const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

export const Loader = styled.span`
    text-align: center;
    display: block;
`;