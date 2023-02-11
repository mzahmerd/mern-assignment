import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";


const initialState ={
    posts: [],
    post:{},
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const addPost = createAsyncThunk(
    'posts/add',
    async ( postData, thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await postService.addPost(postData, token)
        } catch (error) {
            const message = (error.response 
                && error.response.data 
                && error.response.data.error) 
                || error.error || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getAllPosts = createAsyncThunk(
    'posts/getAll',
    async (_, thunkAPI) =>{
        try {
            const token  = thunkAPI.getState().auth.user.token
            return await postService.getPosts(token)
        } catch (error) {
            const message = (error.response 
                && error.response.data 
                && error.response.data.error) 
                || error.error || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getPost = createAsyncThunk(
    'posts/get',
    async (postId, thunkAPI) =>{
        try {
            const token  = thunkAPI.getState().auth.user.token
            return await postService.getPost(postId,token)
        } catch (error) {
            const message = (error.response 
                && error.response.data 
                && error.response.data.error) 
                || error.error || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const updatePost = createAsyncThunk(
    'posts/update',
    async (postData, thunkAPI) =>{
        try {
            console.log(postData)
            const token = thunkAPI.getState().auth.user.token
            return await postService.updatePost(postData._id, postData, token)
        } catch (error) {
            const message = (error.response 
                && error.response.data 
                && error.response.data.error) 
                || error.error || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deletePost = createAsyncThunk(
    'posts/delete',
    async (postId, thunkAPI) =>{
        try {
            const token  = thunkAPI.getState().auth.user.token
            return await postService.deletePost(postId,token)
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
        reset: (state)=> initialState
    },
    extraReducers: (builder) =>{
        builder
            // Cases for creating new post
            .addCase(addPost.pending, (state) =>{
                state.isLoading =true
            })
            .addCase(addPost.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(addPost.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
            // Cases for getting all post
            .addCase(getAllPosts.pending, (state) =>{
                state.isLoading =true
            })
            .addCase(getAllPosts.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.posts = action.payload.data
            })
            .addCase(getAllPosts.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
             // Cases for getting a post
             .addCase(getPost.pending, (state) =>{
                state.isLoading =true
            })
            .addCase(getPost.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.post = action.payload.data
            })
            .addCase(getPost.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
             // Cases for updating a post
             .addCase(updatePost.pending, (state) =>{
                state.isLoading =true
            })
            .addCase(updatePost.fulfilled, (state)=>{
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(updatePost.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
             // Cases for deleting a post
             .addCase(deletePost.pending, (state) =>{
                state.isLoading =true
            })
            .addCase(deletePost.fulfilled, (state)=>{
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(deletePost.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
    }
})

export const {reset} = postSlice.actions
export default postSlice.reducer