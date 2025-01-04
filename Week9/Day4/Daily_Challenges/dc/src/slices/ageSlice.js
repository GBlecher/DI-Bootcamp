import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async (amount) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(amount);
    }, 1000);
  });
});


export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async (amount) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(amount);
    }, 1000);
  });
});

const ageSlice = createSlice({
  name: 'age',
  initialState: {
    age: 0,
    loading: false,
  },
  reducers: {
   
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.age += action.payload;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.age -= action.payload;
      });
  },
});

export const { setAge } = ageSlice.actions;
export default ageSlice.reducer;