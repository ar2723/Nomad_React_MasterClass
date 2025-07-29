import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    max-width:680px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Boards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`;

export const BoardWrapper = styled.div`
    padding: 10px;
    background-color: ${props => props.theme.boardColor};
    border-radius: 5px;
    min-height: 200px;
`;

export const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

export const Card = styled.div`
    background-color: ${props => props.theme.cardColor};
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 5px;
`