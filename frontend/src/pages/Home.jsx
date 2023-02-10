import React from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <section>
      <h2>Posts</h2>

        <div align={'right'}>
          <button className="btn" onClick={() =>navigate('/new-post')}>Add Post</button>
        </div>
        <div>
          <ul >
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
