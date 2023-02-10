import axios from 'axios'

const API_URL = 'http://localhost:4000/api/posts'

const getPosts = async ()=>{
    const response = await axios
        .get(`${API_URL}`)

    return response.data
}

const getPost = async (postId)=>{
    const response = await axios
        .get(`${API_URL}/${postId}`)

    return response.data
}

const addPost = async (postData)=>{
    const response = await axios
        .post(`${API_URL}`,postData)

    return response.data
}

const updatePost = async (postId, postData)=>{
    const response = await axios
        .put(`${API_URL}/${postId}`,postData)

    return response.data
}

const deletePost = async (postId)=>{
    const response = await axios
        .delete(`${API_URL}/${postId}`)

    return response.data
}


const postService = {
    getPosts,
    getPost,
    addPost,
    updatePost,
    deletePost
    
}

export default postService