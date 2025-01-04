import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  status: "", // loading, success, failed
};

/**
 * https://jsonplaceholder.typicode.com/todos
 */
export const fetchTodos = createAsyncThunk("todos/fetchtodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.unshift({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
    },
    addWithPrepare: {
      reducer(state, action) {
        state.todos.unshift(action.payload);
      },
      prepare(val) {
        return {
          payload: { id: nanoid(), title: val, completed: false },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "success";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { add, addWithPrepare } = todosSlice.actions;
export default todosSlice.reducer;
