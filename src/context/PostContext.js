import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
} from "react";
import actionTypes from "../actions/types";
import postReducer, { INITIAL_STATE } from "../reducers/PostReducer";
import axios from "axios";
import PropTypes from 'prop-types';
export const PostContext = createContext(INITIAL_STATE);
export const usePost = () => useContext(PostContext);

const PostContextProvider = (props) => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const children  = props.children;
  useEffect(() => {
     const fetchData = async () => {
      dispatch({ type: actionTypes.SUCCESS_CALL_API });
      try {
        const response = await axios(`${process.env.REACT_APP_API_URL}/post`);
        dispatch({ type: actionTypes.GET_POST, data: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: actionTypes.ERROR_CALL_API, data: error });
      }
    };
    fetchData();
  }, []);

  return (
    <PostContext.Provider
      value={{
        post: state,
        dispatch
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
PostContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
  post: PropTypes.object
};

PostContextProvider.defaultProps = {
  post: null,
};
export default PostContextProvider;
