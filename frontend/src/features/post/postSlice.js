import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";


const initialState ={
    posts: null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const getAllPosts = createAsyncThunk(
    'posts/getAll',
    async (thunkAPI) =>{
        try {
            return await postService.getPosts()
        } catch (error) {
            const message = (error.response 
                && error.response.data 
                && error.response.data.error) 
                || error.error || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        reset: (state)=>{
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = false
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(register.pending, (state)=>{
                state.isLoading=true
            })
            .addCase(register.fulfilled, (state, action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.posts = action.payload
            })
            .addCase(register.rejected, (state, action) =>{
                state.isLoading = false
                state.isError = true
                state.posts = null
                state.message = action.payload
            })
           
    }
})

export const {reset} = postSlice.actions
export default postSlice.reducer