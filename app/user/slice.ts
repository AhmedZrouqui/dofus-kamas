import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IUser } from "@/types";

const initialState: IUser = {
  id: "1",
};

const createUser = createAsyncThunk(
  "user/createUser",
  async (data: any, thunkAPI) => {
    try {
      //TODO: create user logic
    } catch (error) {
      console.error(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createUser.fulfilled, (state, action: PayloadAction) => {});
  },
});

export { createUser };
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
