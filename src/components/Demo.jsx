import React from "react";
import { usePosts } from "../context/PostContext";
import { useUsers } from "../context/UserContext";

const Demo = () => {
  const { postState } = usePosts();
  const { userState, dispatch } = useUsers();
  console.log(postState);
  console.log(userState);

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: "CHECK_LOG", payload: "Clicked Check Log!" })
        }
      >
        Check Log!
      </button>
    </>
  );
};

export default Demo;
