import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    userDetails: {
      email: "",
      city: "",
      state: "",
      postalCode: "",
    },
  },
  reducers: {
    login(state, action) {
      const user = action.payload;
      state.userDetails.email = user.email;
      state.userDetails.city = user.city;
      state.userDetails.state = user.state;
      state.userDetails.postalCode = user.postalCode;
      state.authenticated = true;
      localStorage.setItem("token", `${Math.random()}|${user.email}`);
    },
    logout(state) {
      state.authenticated = false;
      state.userName = {
        email: "",
        city: "",
        state: "",
        postalCode: "",
      };
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
