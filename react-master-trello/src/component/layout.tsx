import styled from "styled-components";
import {IAreaProps} from "../interface/toDoInterface";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width:1200px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Boards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const BoardWrapper = styled.div`
    padding: 10px 0;
    background-color: ${props => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
`;

export const Button = styled.div`
    display: flex;
    justify-content: right;
    margin: 0 10px;
    button {
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 5px;
        color: grey;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

export const Card = styled.div<{ $isDragging: boolean }>`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.$isDragging ? "#74b9ff" : props.theme.cardColor};
    box-shadow: ${props => props.$isDragging ? "0 2px 5px rgba(0,0,0,0.05)" : "none"};
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 5px;
    button {
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 5px;
        color: grey;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
    }
`

export const Area = styled.div<IAreaProps>`
    background-color: ${props =>
    props.$isDraggingOver
        ? "#dfe6e9"
        : props.$isDraggingFromThis
            ? "#b2bec3"
            : "transparent"
    };
    flex-grow: 1;
    transition: background-color .2s ease-in-out;
    padding: 20px;
`

export const Form = styled.form`
    width: 100%;
    margin-bottom: 20px;
    input {
        width: 100%;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    input::placeholder {
        text-align: center;
    }
`

export const TrashcanArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 680px;
    width: 33%;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
`

export const TrashBox = styled.div<IAreaProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-radius: 5px;
    background-color: ${props => props.$isDraggingOver ? "#dfe6e9" : "#f4f7f8"};
    transition: background-color .2s ease-in-out;
    span {
        display: ${props => props.$isDraggingOver ? "none" : "block"};
    }
`