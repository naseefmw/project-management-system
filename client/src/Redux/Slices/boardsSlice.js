import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardsData: {},
  pending: true,
  backgroundImages: [],
  smallPostfix:
    "?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjM2NjUzNDgz&ixlib=rb-1.2.1&q=80&w=400",
  creating: false,
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    startFetchingBoards: (state) => {
      state.pending = true;
    },
    successFetchingBoards: (state, action) => {
      state.boardsData = action.payload.boards;
      state.pending = false;
    },
    failFetchingBoards: (state) => {
      state.pending = false;
    },
    startCreatingBoard: (state) => {
      state.creating = true;
    },
    successCreatingBoard: (state, action) => {
      state.boardsData.push(action.payload);
      state.creating = false;
    },
    failCreatingBoard: (state) => {
      state.creating = true;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const {
  startFetchingBoards,
  successFetchingBoards,
  failFetchingBoards,
  startCreatingBoard,
  successCreatingBoard,
  failCreatingBoard,
  reset,
} = boardsSlice.actions;
export default boardsSlice.reducer;
