import actionTypes from "../actions/types";
import PropTypes from 'prop-types';

export const INITIAL_STATE = {
  loading: false,
  postDetails: [],
  error: null,
};

export default function postReducer(state = INITIAL_STATE, action) {
  const postdata = action.data;
  switch (action.type) {
    case actionTypes.SUCCESS_CALL_API: {
      return {
        ...state,
        loading: true,
      };
    }

    case actionTypes.GET_POST: {
      return {
        ...state,
        loading: false,
        postDetails: postdata,
      };
    }

    case actionTypes.REMOVE_POST:
      return {
        ...state,
        loading: false,
        postDetails: state.postDetails.filter((post) => post.id !== postdata),
      };

    case actionTypes.UPDATE_POST:
      const updatedPost = state.postDetails.map((post) => {
        if (post.id === postdata.id) {
          return postdata;
        }
        return post;
      });
      return {
        ...state,
        postDetails: updatedPost,
      };

    case actionTypes.SEARCH_POST:
      return {
        ...state,
        postDetails: state.postDetails.filter((e) =>
          e.title.includes(postdata)
        ),
      };

    case actionTypes.ERROR_CALL_API: {
      return {
        ...state,
        loading: false,
        error: "Something went wrong !!!",
      };
    }
    default:
      return postdata;
  }
}

INITIAL_STATE.propTypes = {
  loading:  PropTypes.bool.isRequired,
  postDetails: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number,
    title:PropTypes.string,
    body:PropTypes.string
  })),
  error:PropTypes.number,
};