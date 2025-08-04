import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  accessToken: string;
  refreshToken: string;
}

const initialState: UserState = {
  accessToken: "",
  refreshToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logoutUser: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
