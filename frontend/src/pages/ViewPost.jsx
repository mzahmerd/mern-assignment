import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, getPost, reset } from "../features/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function ViewPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { post, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );
  const { postId } = useParams();

  useEffect(() => {
    // on component dismount, reset the state
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getPost(postId));
    if (isError) {
      alert(message);
    }
    if(isSuccess){
      alert('deleted')
    }
  }, [dispatch, message, isError]);

  const onDeletePost = (e) =>{
    e.preventDefault()

    dispatch(deletePost(postId));
    
  }
  return (
    <div>
      <div>
        <div>
          <h4>{post.title}</h4>
          <hr />
          <p>{post.text}</p>
        </div>
        <div>
          <div>
            <button
              onClick={() => navigate(`/update-post/${post._id}`, {state:{text:post.text, title:post.title}})}
              style={{ display: "inline" }}
              className="btn"
            >
              Edit
            </button>
            {"        "}
            <button onClick={onDeletePost} style={{ display: "inline" }} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
