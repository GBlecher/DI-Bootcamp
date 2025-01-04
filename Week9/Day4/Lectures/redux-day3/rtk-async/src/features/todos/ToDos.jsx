import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, add, addWithPrepare } from "./todosSlice";
import { useEffect, useRef } from "react";
import "./ToDos.css";

const ToDos = (props) => {
  const todos = useSelector((state) => state.todosReducer.todos);
  const status = useSelector((state) => state.todosReducer.status);

  const dispatch = useDispatch();
  const titleRef = useRef();
  //   console.log(todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (status === "loading") return <h2>Loading todos...</h2>;

  if (status === "failed")
    return <h2>Somthing went wrong... try in few minutes</h2>;

  return (
    <>
      <h2>ToDo's List</h2>
      <div>
        <input placeholder="Todo's title" ref={titleRef} />
        <button onClick={() => dispatch(add(titleRef.current.value))}>
          Add Todo
        </button>
        <button onClick={() => dispatch(addWithPrepare(titleRef.current.value))}>
          Add Todo With Prepare
        </button>
      </div>
      {todos.map((item, indx) => {
        return (
          <div key={item.id} className={item.completed ? "completed" : ""}>
            {indx + 1}. {item.title}
          </div>
        );
      })}
    </>
  );
};
export default ToDos;
