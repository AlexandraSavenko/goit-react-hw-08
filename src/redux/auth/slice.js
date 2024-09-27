import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logIn, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    console.log(builder);

    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(register.pending, logIn.pending),
        (state) => (state.isLoading = true)
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected),
        (state, action) => (
          (state.isLoading = false), (state.isError = action.payload)
        )
      );
  },
});
export default authSlice.reducer;
