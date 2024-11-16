import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLogout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setUser, setLogout } = userSlice.actions;
export default userSlice.reducer;
