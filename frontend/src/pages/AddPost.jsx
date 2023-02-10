import React from 'react'

export default function AddPost() {
  return (
    <div>
    <div className="heading">
    Create new post
    </div>

    <section className="form" id="new-post">
          <form
            onSubmit={(e) => {
              alert("submitted");
              e.preventDefault();
            }}
          >
            <div className="form-group">
              <label  style={{ display: "block" }} htmlFor="text">
                Post Title
              </label>
              <input type="text" />
            </div>
            <div className="form-group">

              <label style={{ display: "block" }} htmlFor="text">
                Post Content
              </label>
              <textarea name="text" id="text" />
            </div>
            <div className="form-group">
            <button className="btn btn-block">Post</button>
            </div>
          </form>
    </section>
  </div>
  )
}
