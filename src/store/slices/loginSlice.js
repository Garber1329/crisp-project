import { createSlice } from "@reduxjs/toolkit";
import logitThunk from "../async/LoginData";
import axios from "axios";

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        user: [],
        userData: [],
        login: false,
        loading: false,
        error:  null
    },
    reducers: {
        singUpUser: (state, action) => {
            const filterData = state.userData.filter(e => e.email === action.payload.email && e.password === action.payload.password )

            if(filterData) {
                state.user = filterData
                state.login = true
            } else {
                state.login = false
            }
        },

        registerUser: (state, action) => {
            const registerFn = async () => {
                await axios.post('https://crisp-project-server.onrender.com/users', {
                    id: state.userData[state.userData.length - 1].id + 1,
                    name: action.payload.FirstName,
                    email: action.payload.Email,
                    password: action.payload.Password,
                    lastName: action.payload.LastName,
                })
            }

            registerFn()
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(logitThunk.pending, (state) => {
                state.error = false
                state.loading = null
            })

            .addCase(logitThunk.fulfilled, (state, action) => {
                state.loading = false
                state.userData = action.payload
            })

            .addCase(logitThunk.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export const {singUpUser, registerUser} = loginSlice.actions
export default loginSlice.reducer