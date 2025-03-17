import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  users: "form userContext",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "CHECK_LOG":
      return {
        ...state,
        posts:action.payload
      };

    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  return useContext(UserContext);
};
