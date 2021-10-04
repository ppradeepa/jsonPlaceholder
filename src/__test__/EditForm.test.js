import React, { useReducer, useContext } from "react";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import {PostReducer} from '../reducers/postReducer';
import { PostContext,PostContextProvider } from "../context/PostContext";
import EditForm from "../components/EditForm";
import { render as testRender, getByText } from "@testing-library/react";
import {Typography ,Button}from "@material-ui/core";

const props = {
    handleInputChange: jest.fn(),
    handleClose: jest.fn(),
    handleUpdate: jest.fn(),
    open:true,
    selected:{
        "loading": "false",
        "postDetails":[{
          "userId": 1,
          "id":1,
          "title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]
         
      }
};
describe("<EditForm/>", () => {
    let events = [];
    const EditFormWrapper = () => {
        return (
            <EditForm  title={props.selected.postDetails[0].title}  body={props.selected.postDetails[0].body} {...props} />
        );
      };
      render(<EditFormWrapper/>)

    it("Update the Edit Form filled value", () => {
        const Title = screen.getByTestId("title").querySelector('input');
        const Body = screen.getByTestId("body").querySelector('input');
        fireEvent.change(Title, { target: { value: props.selected.postDetails[0].title} });
        fireEvent.change(Body, { target: { value: props.selected.postDetails[0].body} });
       
        fireEvent.click(screen.getByText(/Close/i));
        fireEvent.click(screen.getByText(/Update/i));
        expect(props.handleUpdate).toHaveBeenCalledTimes(1)
    });
 
});

