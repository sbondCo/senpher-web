import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { File } from "types";

const fileSlice = createSlice({
  name: "file",
  initialState: {
    value: new Array<File>({ name: "hi" }, { name: "sometig else" })
  },
  reducers: {
    add: (state, action: PayloadAction<File>) => {
      state.value.push(action.payload);
    }
  }
});

export const { add } = fileSlice.actions;

export default fileSlice.reducer;
