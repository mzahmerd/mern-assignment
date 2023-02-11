import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { reset, updatePost } from "../features/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function EditPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { postId } = useParams();
  
  const { isError, isSuccess, message } = useSelector((state) => state.posts);
  
  const [postData, setPostData] = useState({
    title: location.state.title,
    text: location.state.text,
  });

  const { title, text } = postData;

  useEffect(() => {
    // on component dismount, reset the state
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    if (isError) {
      alert(message);
    }
    dispatch(reset())
  }, [dispatch, message, isError]);

  const onDataChange = (evt) => {
    setPostData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const postData = {
      _id:postId,
      title,
      text,
    };
    dispatch(updatePost(postData));
    navigate(`/posts/${postId}`)
  };
  return (
    <div>
      <section className="form" id="update-post">
        <div>
          <h2>Update post</h2>
          <div>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label style={{ display: "block" }} htmlFor="text">
                  Post Title
                </label>
                <input
                  type="text"
                  value={title}
                  name="title"
                  id="title"
                  onChange={onDataChange}
                />
              </div>
              <div className="form-group">
                <label style={{ display: "block" }} htmlFor="text">
                  Post Content
                </label>
                <textarea name="text" id="text" value={text} onChange={onDataChange}/>
              </div>
              <button className="btn btn-block">Update</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
