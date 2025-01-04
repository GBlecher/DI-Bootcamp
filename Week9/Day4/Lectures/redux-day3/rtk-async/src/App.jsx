import Counter from "./features/counter/Counter";
import ToDos from "./features/todos/ToDos";
import "./App.css";

function App() {
  return (
    <>
      <h2>Async with Redux, Middleware in Redux, Redux DevTool</h2>
      <Counter />
      <ToDos/>
    </>
  );
}

export default App;
