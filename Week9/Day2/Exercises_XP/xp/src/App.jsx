
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

const App = () => (
  <>
  <h1>To Do List</h1>
   <Provider store={store}>
    <AddTodoForm />
    <TodoList />
  </Provider>
  </>
 
);

export default App;