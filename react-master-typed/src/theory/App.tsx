
import {useState} from "react";
import styled from "styled-components";

function App() {

    const Container = styled.div`
        background-color: ${props => props.theme.bgColor};
        
    `;
    const H1 = styled.h1`
        color: ${props => props.theme.textColor};
    `;

    interface DummyProps {
        text : string;
        active? : boolean;
    }

    const Dummy = ({ text, active = false } : DummyProps) => {
        return <H1>{text}</H1>
    }

    const [value, setValue] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("hello", value);
    };

    const onClick = (event : React.MouseEvent<HTMLButtonElement>) => {

    };

    return (
        <Container>
            <Dummy text="hello" active></Dummy>
            <button onClick={onClick}>click me</button>

        </Container>
    )
}

export default App;
