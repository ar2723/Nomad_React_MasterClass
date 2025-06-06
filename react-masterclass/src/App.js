import styled from "styled-components"

const Father = styled.div`
    display: flex;
`;
const Box = styled.div`
    background-color: ${props => props.bgColor}; 
    width: 100px; 
    height: 100px;
`;
const Circle = styled(Box)`
    border-radius: 50%;
`;
const Btn = styled.button`
    color:white;
    background-color: tomato;
    border: 0;
    border-radius: 15px;
`;
const Link = styled(Btn)`
`;
const Input = styled.input.attrs({ required: true, minLength: 10 })`
    background-color: tomato;
`

function App() {
    return (
        <Father as={"header"}>
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
        </Father>
    );
}

export default App;
