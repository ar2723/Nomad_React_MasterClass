import styled from "styled-components";
import {IAreaProps} from "../interface/toDoInterface";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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
    padding: 10px 0;
    padding-top: 30px;
    background-color: ${props => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
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
        border: none;
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
    transition: background-color .3s ease-in-out;
    padding: 20px;
`

export const Form = styled.form`
    width: 100%;
    input {
        width: 100%;
    }
`

export const TrashcanArea = styled.div`
    max-width:680px;
    width: 33%;
    margin: 0 auto;
    margin-top: 50px;
    height: 100px;
    border-radius: 5px;
    background-color: #f4f7f8;
`