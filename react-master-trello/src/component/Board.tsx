import {Droppable} from "react-beautiful-dnd";
import DraggabbleCard from "./DraggabbleCard";
import {Area, BoardWrapper, Button, Form, Title} from "./layout";
import {boardState, toDoState} from "../atoms/toDoState";
import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {IBoardProps, IForm} from "../interface/toDoInterface";
import React from "react";

function Board({toDos, boardId} : IBoardProps) {
    const setToDos = useSetRecoilState(toDoState);
    const setBoards = useSetRecoilState(boardState);
    const {register, setValue, handleSubmit} = useForm<IForm>();
    const onValid = ({todo}: IForm) => {
        const newToDo = { id: Date.now(), text: todo }
        setToDos(allBoards => {
            return { ...allBoards, [boardId]: [...allBoards[boardId], newToDo] }
        })
        setValue("todo", "");
    }
    const onClick = () => {
        if(!window.confirm("Do you want to delete this board?")) return;
        setToDos(allBoards => {
            const copyBoard = { ...allBoards }
            delete copyBoard[boardId];
            return copyBoard;
        })
        setBoards(prev => prev.filter(id => id !== boardId))
    }
    return (
        <BoardWrapper>
            <Button>
                <button onClick={onClick}>X</button>
            </Button>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("todo", { required: true })}
                    type="text"
                    placeholder={"Add Task"}
                />
            </Form>
            <Droppable droppableId={boardId}>
                {(provided, snapshot) =>
                    <Area $isDraggingOver={snapshot.isDraggingOver}
                          $isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                          ref={provided.innerRef}
                          {...provided.droppableProps}>
                        {toDos.map((todo, index) =>
                            <DraggabbleCard
                                key={todo.id}
                                todoId={todo.id}
                                index={index}
                                todoText={todo.text}
                                boardId={boardId}
                            />
                        )}
                        {provided.placeholder}
                    </Area>
                }
            </Droppable>
        </BoardWrapper>
    )
}

export default Board;