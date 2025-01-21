import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  previousLocation: null,
  loginData: [
    { id: "312451" , name: "Analysis 1", description: "Account Matrix 1" },
    { id: "1" , name: "Analysis 2", description: "Account Matrix 2" },
    { id: "143556" , name: "Analysis 3", description: "Account Matrix 3" },
  ],
};

const appSlice = createSlice({
    name: 'app',
    initialState: {
      previousLocation: null, // مقدار مسیر قبلی
    },
    reducers: {
      setPreviousLocation: (state, action) => {
        state.previousLocation = action.payload; // ذخیره مسیر قبلی
      },
    },
  });

export const { setPreviousLocation } = appSlice.actions;

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export default store;
