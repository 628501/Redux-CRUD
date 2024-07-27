import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const id = action.payload.id;
      state.users = state.users.filter(
        user => user.id !== id
      );
    },
    getUser: (state, action) => {
      state.users = action.payload.map(user => {
        return {id: user.id, name: user.name, email: user.email, age: user.age, contact: user.contact}
      })
    },
    updateuser: (state, action) => {
      const index = state.users.findIndex(x => x.id === action.payload.id);
      state.users[index] = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
        contact: action.payload.contact,
    }
    },
   },
});

export const { deleteUser, getUser, updateuser } = UserSlice.actions;

export default UserSlice.reducer;
