import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "app/rootReducer";
import Axios from "axios";
import { User } from "./types";
import { SortType } from "./usersSlice";

const baseURL = "https://randomuser.me/api";

export const getUsers = createAsyncThunk<
  User[],
  {
    gender: "all" | "male" | "female";
    keyword: string;
    sorts: SortType[];
    page: number;
  },
  { state: RootState }
>("users/getUsers", async ({ gender, keyword, sorts, page }, thunkApi) => {
  const genderFilter = `gender=${gender}`;
  const keywordFilter = keyword && `&keyword=${keyword}`;
  const sortsFilter = sorts
    .map((sort) => `&sortBy=${sort.sortBy}&sortOrder=${sort.sortOrder}`)
    .join("");
  const filters = genderFilter.concat("", keywordFilter, sortsFilter);
  const response = await Axios.get(
    `${baseURL}?inc=id,username,name,email,gender,registered,login&page=${page}&results=10&${filters}`
  )
    .then((result) => {
      return result.data.results;
    })
    .catch((error) => {
      return error;
    });
  // console.log(response);

  if (response.message) {
    return thunkApi.rejectWithValue(response.message);
  }
  return (await response) as User[];
});
