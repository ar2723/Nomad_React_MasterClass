import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

export const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

export const Loader = styled.span`
    text-align: center;
    display: block;
`;

export const Coin = styled.li`
    background-color: white;
    color:${props => props.theme.bgColor};
    
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        padding: 20px;
        transition: color 0.2s ease-in;
        display: flex;
        align-items: center;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;

export const CoinList = styled.ul`
    
`;