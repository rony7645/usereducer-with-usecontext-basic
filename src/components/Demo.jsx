import React from "react";
import { usePosts } from "../context/PostContext";

const Demo = () => {

  const {postState} = usePosts()
  console.log(postState);
  
  return (
    <>
      <h1>{postState.post}</h1>
    </>
  );
};

export default Demo;
