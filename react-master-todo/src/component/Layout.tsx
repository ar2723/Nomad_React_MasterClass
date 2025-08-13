import styled from "styled-components";

export const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
    form {
        margin: 20px;
        display: flex;
        flex-direction: column;
    }
`;

export const TodoListHeader = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    h1 {
        font-weight: 700;
        font-size: 30px;
        color: beige;
    }
    form {
        width: 100%;
    }
`