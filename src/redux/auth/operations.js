import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    console.log(credentials);

    try {
      const { data } = await axios.post("/users/signup", credentials);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
//Sashatestsauthops@gmail.com
//Sashatestsauthops2@gmail.com
