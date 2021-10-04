import React, { useReducer } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import PostDetails from "./components/PostDetails";
import { PostReducer } from "./reducers/PostReducer";
import { PostContext,PostContextProvider } from "./context/PostContext";
import AutoSearch from "./components/AutoSearch";
const post = {
  "loading": "false",
  "postDetails":[{
    "userId": 1,
    "id":1,
    "title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }]
   
};
export const INITIAL_STATE = {
  loading: false,
  postDetails: [],
  error: null,
};
it("mining grid after mining due to valid solution", async () => {
 
  const Wrapper = () => {
    const [post, dispatch] = useReducer(PostReducer, INITIAL_STATE);

    return (
      <PostContext.Provider value={{ post, dispatch }}>
        <PostDetails />
      </PostContext.Provider>
    );
  };

  render(<Wrapper />);
  expect(screen.getByRole("post_details-id"));
  
});


