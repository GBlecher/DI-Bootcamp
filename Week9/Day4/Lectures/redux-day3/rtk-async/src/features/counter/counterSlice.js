import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 5,
  msg: "",
};

export const delayIncrementThunk = createAsyncThunk("counter/delay5sec", () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(5);
    }, 5 * 1000);
  });
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByNum: (state, action) => {
      console.log("action=>", action);
      state.count += Number(action.payload.num);
    },
    //prepare
    increment2nums: {
      reducer(state, action) {
        state.count += action.payload;
      },
      prepare(num1, num2) {
        //....
        return { payload: Number(num1) + Number(num2) };
      },
    },
    delayIncerementBy5Sec: (state) => {
      setTimeout(() => {
        state.count += 5;
      }, 5 * 1000);
    },
  },
  extraReducers(builder) {
    builder
    .addCase(delayIncrementThunk.fulfilled, (state, action) => {
      console.log('action fullfilled=>',action);
      state.count += action.payload
    })
    .addCase(delayIncrementThunk.pending, (state,action) => {
      console.log('action=>',action);
    })
    .addCase(delayIncrementThunk.rejected, (state,action) => {
      console.log('action rejected=>', action.error.message);
    })
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByNum,
  increment2nums,
  delayIncerementBy5Sec,
} = counterSlice.actions;

export default counterSlice.reducer;

/**
 * action ----- fetch --- ->  dispatch ->  ------ > reducer -------- > store
 */
