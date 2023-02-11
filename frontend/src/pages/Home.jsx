import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { getAllPosts, reset } from "../features/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";


export default function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { posts, isError, isSuccess, message} = useSelector(state => state.posts)

  useEffect(() =>{
    // on component dismount, reset the state
    return () =>{
      if(isSuccess){
        dispatch(reset())
      }
    }
  } ,[dispatch, isSuccess])

  useEffect(() =>{
    dispatch(getAllPosts())
    if(isError){
      alert(message)
    }
  }, [dispatch, message, isError])
  return (
    <div>
      <section>
      <h2>Posts</h2>

        <div align={'right'}>
          <button className="btn" onClick={() =>navigate('/new-post')}>Add Post</button>
        </div>
        <div>
          <ul >
            {posts.map((post, i)=>{
              return (
                <li key={i}>
              <div>
                <Link to={`/posts/${post._id}`}><h4>{post.title}</h4></Link>
                <p>{post.text}</p>
                <small>author: {post.author && post.author.name }</small>
                <hr />
              </div>
            </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
