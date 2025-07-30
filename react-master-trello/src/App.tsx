import React, {useEffect} from 'react';
import {DragDropContext, DropResult} from "react-beautiful-dnd"
import {GlobalStyle} from "./theme/GlobalStyle";
import {Boards, Form, Wrapper} from "./component/layout";
import {useRecoilState} from "recoil";
import {boardState, toDoState} from "./atoms/toDoState";
import Board from "./component/Board";
import Trashcan from "./component/Trashcan";
import {controllCardMovement} from "./utils/boardFn";
import {useForm} from "react-hook-form";
import {IForm} from "./interface/toDoInterface";

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const [boards, setBoards] = useRecoilState(boardState);
    const {register, setValue, handleSubmit} = useForm<IForm>();

    useEffect(() => {
        const keys = Object.keys(toDos)
        setBoards(keys)
    }, [toDos, setBoards])

    const onDragEnd = (info:DropResult) => {
        controllCardMovement(info, setToDos);
    }

    const onValid = ({ board }: IForm) => {
        setBoards(allBoards => {
            return [...allBoards, board]
        })
        setToDos(allBoards => {
            return {
                ...allBoards,
                [board]: [],
            }
        })
        setValue("board", "");
    }

    return (
        // 일반적으로 부모의 Component가 변경되면 자식 Component가 모두 재렌더링되어버린다.
        <>
            <GlobalStyle/>
            <DragDropContext onDragEnd={onDragEnd}>
                <Wrapper>
                    <Form onSubmit={handleSubmit(onValid)}>
                        <input
                            {...register("board", { required: true })}
                            type="text"
                            placeholder={"Add Board"}
                        />
                    </Form>
                    <Boards>
                        {boards.map(boardId => (
                            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]}/>
                        ))}
                    </Boards>
                    <Trashcan/>
                </Wrapper>
            </DragDropContext>
        </>
    );
}

export default App;
