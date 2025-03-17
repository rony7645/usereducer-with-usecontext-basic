import { PostProvider } from "./context/PostContext";
import { UserProvider } from "./context/UserContext";


const providers = [UserProvider, PostProvider];

export const Store = ({ children }) => {
  return providers.reduce(
    (WrapperChildren, Provider) => <Provider>{WrapperChildren}</Provider>,
    children
  );
};
