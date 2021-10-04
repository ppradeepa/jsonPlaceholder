import React  from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";


import { Grid, makeStyles, TextField, Paper } from "@material-ui/core";
import { usePost } from "../context/PostContext";
import actionTypes from "../actions/types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const AutoSearch = () => {
  const { post, dispatch } = usePost();
  const classes = useStyles();
  const searchpost = (post) => {
    dispatch({ type: actionTypes.SEARCH_POST, data: post });
  };
  const handleInputChange = (event, value) => {
    searchpost(value);
  };

  return (
    <div className={classes.root} role="autosearch">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {post.postDetails.length > 0 ? (
              <Autocomplete
                disableClearable
                onInputChange={handleInputChange}
                options={post.postDetails.map((post) => post.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    InputProps={{ ...params.InputProps, type: "search" }}
                  />
                )}
              />
            ) : (
              ""
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AutoSearch;
