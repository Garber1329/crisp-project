import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const logitThunk = createAsyncThunk(
    'login/thunk',
    async (_, thunkApi) => {
        try{
           const fetchLogin = await axios.get('https://crisp-project-server.onrender.com/users')

            return fetchLogin.data
        } catch(error) {
            return thunkApi.rejectWithValue(error.massage)
        }
    }
)

export default logitThunk