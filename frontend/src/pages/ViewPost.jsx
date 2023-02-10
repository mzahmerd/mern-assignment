import React from 'react'
import {Link} from 'react-router-dom'

export default function ViewPost() {
  return (
    <div>
        <div>
              <div>
                <h4>The world of AI</h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus maxime excepturi, sed libero vitae eligendi magni
                  error corporis! Cupiditate rem harum nulla accusamus id
                  laborum magni unde tenetur fuga repellendus.
                </p>
              </div>
              <div>
                <Link to={`/update-post/1`}>Edit</Link> {'  '}
                <button>Delete</button>
              </div>
        </div>
    </div>
  )
}
