import { combineReducers } from "@reduxjs/toolkit";
import { usersSlice, UsersState } from "features/users/usersSlice";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
});

export type RootState = {
  users: UsersState;
};

export default rootReducer;
