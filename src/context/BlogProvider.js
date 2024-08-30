import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogPostReducer = (state, action) => {
  switch (action.type) {
    case "delete_blockPost":
      return state.filter((blogpost) => blogpost.id !== action.payload);

    case "add_blockPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "edit_blockPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blockPost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blockPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blockPost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogPostReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Test Title", content: "Test Content", id: 1 }]
);
