import { createContext, useContext, useReducer } from "react";

const PostContext = createContext();

const initialState = {
  post: "from post context",
};

const postReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [postState, dispatch] = useReducer(postReducer, initialState);
  return (
    <PostContext.Provider value={{ postState, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostContext);
};
