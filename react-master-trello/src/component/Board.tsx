import {Droppable} from "react-beautiful-dnd";
import DraggabbleCard from "./DraggabbleCard";
import {Area, BoardWrapper, Form, Title} from "./layout";
import {toDoState} from "../atoms/toDoState";
import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {IBoardProps, IForm} from "../interface/toDoInterface";

function Board({toDos, boardId} : IBoardProps) {
    const setToDos = useSetRecoilState(toDoState);
    const {register, setValue, handleSubmit} = useForm<IForm>();
    const onVaild = ({todo}: IForm) => {
        const newToDo = {
            id: Date.now(),
            text: todo
        }
        setToDos(allBoards => {
            return {
                ...allBoards,
                [boardId]: [...allBoards[boardId],  newToDo],
            }
        })
        setValue("todo", "");
    }
    return (
        <BoardWrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onVaild)}>
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