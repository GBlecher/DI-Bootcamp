import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { toggleTodo, removeTodo } from '../redux/action';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleTodo={toggleTodo} 
          removeTodo={removeTodo} 
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  toggleTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);