import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, reset } from "../features/posts/postSlice";
import { useNavigate } from "react-router";

export default function AddPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: "",
    text: "",
  });

  const { title, text } = postData;
  const { isError, isSuccess, message, post } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    if (isError) {
      alert(message);
    }

    if (isSuccess && post) {
      dispatch(reset());
      navigate("/");
    }
    dispatch(reset());
  }, [dispatch, navigate, message, isError, isSuccess]);

  const onDataChange = (evt) => {
    setPostData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const postData = {
      title,
      text,
    };

    dispatch(addPost(postData));
  };

  return (
    <div>
      <div className="heading">Create new post</div>

      <section className="form" id="new-post">
        <form
          onSubmit={onSubmit}
        >
          <div className="form-group">
            <label style={{ display: "block" }} htmlFor="text">
              Post Title
            </label>
            <input type="text"
            name="title"
            id="title"
            required
            onChange={onDataChange}
            />
          </div>
          <div className="form-group">
            <label style={{ display: "block" }} htmlFor="text">
              Post Content
            </label>
            <textarea 
            name="text"
             id="text"
             required
             onChange={onDataChange}
             />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Post</button>
          </div>
        </form>
      </section>
    </div>
  );
}
