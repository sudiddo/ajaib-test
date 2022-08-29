import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/rootReducer";
import { User } from "./types";
import { getUsers } from "./usersThunk";

type SortByType = "username" | "name" | "email" | "gender" | "registered";

export type SortType = { sortBy: SortByType; sortOrder: "ascend" | "descend" };

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  sortTypes: SortType[];
  page: number;
}

export const initialState: UsersState = {
  users: [],
  loading: true,
  error: null,
  sortTypes: [],
  page: 1,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<SortType>) => {
      const sorts = state.sortTypes;
      const sort = action.payload;
      const index = sorts.findIndex((s) => s.sortBy === sort.sortBy);

      if (index === -1) {
        sorts.push(sort);
      } else {
        sorts.splice(index, 1, sort);
      }
      state.sortTypes = [...sorts];
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetSortTypes: (state) => {
      state.sortTypes = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { setSortType, setPage, resetSortTypes } = usersSlice.actions;

export const usersSelector = (state: RootState) => state.users;
