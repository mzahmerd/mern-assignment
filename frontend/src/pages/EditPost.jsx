import React from 'react'

export default function EditPost() {
  return (
    <div>
          <section id="new-post">
        <div>
          <h2>Update post</h2>
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
                <input type="text" value={'POst new'}/>
              </div>
              <div>
                <label style={{ display: "block" }} htmlFor="text" >
                  Post Content
                </label>
                <textarea name="text" id="text" value={'lorem ipsum'}/>
              </div>
              <button>Update</button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
