import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section id="new-post">
        <div>
          <h2>Create new post</h2>
          <div>
            <form
              onSubmit={(e) => {
                alert("submitted");
                e.preventDefault();
              }}
            >
              <div>
                <label style={{ display: "block" }} htmlFor="text">
                  Post Title
                </label>
                <input type="text" />
              </div>
              <div>
                <label style={{ display: "block" }} htmlFor="text">
                  Post Content
                </label>
                <textarea name="text" id="text" />
              </div>
              <button>Post</button>
            </form>
          </div>
        </div>
      </section>

      <section>
        <h2>Posts</h2>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <div>
                <Link to='/posts/1'><h4>The world of AI</h4></Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus maxime excepturi, sed libero vitae eligendi magni
                  error corporis! Cupiditate rem harum nulla accusamus id
                  laborum magni unde tenetur fuga repellendus.
                </p>
                <hr />
              </div>
            </li>
            <li>
              <div>
              <Link to='/posts/1'><h4>New Post</h4></Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus maxime excepturi, sed libero vitae eligendi magni
                  error corporis! Cupiditate rem harum nulla accusamus id
                  laborum magni unde tenetur fuga repellendus.
                </p>
                <hr />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
