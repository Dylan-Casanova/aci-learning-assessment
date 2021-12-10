import React, { useRef } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_POST, LOADING } from '../../utils/actions';
import API from '../../utils/API';

function CreateCourseForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      Name: titleRef.current.value,
      Status: bodyRef.current.value,
      
    })
      .then((result) => {
        dispatch({
          type: ADD_POST,
          post: result.data,
        });
      })
      .catch((err) => console.log(err));

    titleRef.current.value = '';
    bodyRef.current.value = '';
  };

  return (
    <div>
      
      <h1>Create a new course</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <label htmlFor="title">Name:</label>
        <input
          className="form-control mb-5"
          required
          ref={titleRef}
          id="title"
          placeholder="Title"
        />
        <label htmlFor="body">Body:</label>
        <textarea
          className="form-control mb-5"
          required
          ref={bodyRef}
          id="body"
          placeholder="Body"
        />
        <label htmlFor="screen name">Screen Name:</label>
       
        <button
          className="btn btn-success mt-3 mb-5"
          disabled={state.loading}
          type="submit"
        >
          Save Post
        </button>
      </form>
    </div>
  );
}

export default CreateCourseForm;
