const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
    return (
      <li>
        <div
          style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          onClick={() => toggleTodo(todo.id)}>
          {todo.text}
        </div>
        <button onClick={(e) => { e.stopPropagation(); removeTodo(todo.id); }}>Delete</button>  {/* Handle deletion */}
      </li>
    );
  };
  
  export default TodoItem;