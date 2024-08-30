import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogPostReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;

    case "delete_blockPost":
      return state.filter((blogpost) => blogpost.id !== action.payload);

    case "add_blockPost":
      return [
        ...state,
        {
          // id: Math.floor(Math.random() * 9999),
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

const getBlockPosts = (dipatch) => {
  return async () => {
    const response = await jsonServer.get("/blockPost");
    //response.data === [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    dipatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blockPost", { title, content });

    // dispatch({ type: "add_blockPost", payload: { title, content } });

    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blockPost/${id}`);
    dispatch({ type: "delete_blockPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blockPost/${id}`, { title, content });

    dispatch({ type: "edit_blockPost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogPostReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlockPosts },
  []
);
