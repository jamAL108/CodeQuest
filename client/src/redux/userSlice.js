import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Data from '../utils/data'

const URL = "http://localhost:8000/api";
// const URL = "https://codequest-server.onrender.com/api"
const Origin = "http://localhost:3000";
// const Origin = 'https://codequst-app.vercel.app'

const initialState = {
    signuperror: "",
    loginerror: "",
    email: "",
    sections: Data
}



const Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addSignupError: (state, action) => {
            state.signuperror = action.payload
        },
        addSigninError: (state, action) => {
            state.loginerror = action.payload
        },
        addEmail: (state, action) => {
            state.email = action.payload
        },
        addSection: (state, action) => {
            state.sections = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(signup.fulfilled,(state,action)=>{
            state.signuperror = action.payload
        }),
        builder.addCase(login.fulfilled,(state,action)=>{
            state.loginerror = action.payload
        }),
        builder.addCase(fetchSections.fulfilled,(state,action)=>{
            state.sections = action.payload
        })
    }
})

/////// API FUNCTIONS

export const signup = createAsyncThunk("signup", async (args,_,__) => {
    const {data, router} = args
    try {
        const resp = await fetch(`${URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const msg = await resp.json();
        if (resp.status === 200) {
            localStorage.setItem("codeQuestUSER",JSON.stringify(msg.user))
        } else {
            return msg?.error
        }
    } catch (err) {
        console.log(err)
        return err?.message
    }
})


export const login = createAsyncThunk("login", async (args,_,__) => {
    const {formdata,router} = args
    try {
        console.log(formdata);
        const data = await fetch(`${URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        });
        const msg = await data.json();
        if (data.status === 200) {
            localStorage.setItem("codeQuestUSER",JSON.stringify(msg.user))
            router.push("/dashboard");
        } else {
            console.log(msg.error);
            return msg?.error
        }
    } catch (err) {
        console.log(err);
        return err?.message
    }
})

export const fetchSections = createAsyncThunk("fetchSections", async (args , _ , __) => {
    const { id } = args;
    try {
        // const data = await fetch(`${URL}/fetchsections/${formdata?.id}`, {
        //     method: "GET",
        //     credentials: "include",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Origin: Origin,
        //     }
        // });
        // const msg = await data.json();
        // if (data.status === 200) {
            console.log(Data)
            return Data
            // dispatch({ type: action.SECTIONS, payload: Data })
        // } else {
        //     console.log(msg);
        // }
    } catch (err) {
        console.log(err)
    }
})




export const { addSignupError, addSigninError, addEmail, addSection } = Slice.actions;
export default Slice.reducer;
