import React, { useState } from "react";
import AutoSearch from "./AutoSearch";
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  makeStyles,
  Typography,
  Divider,
  Box
} from "@material-ui/core";
import { usePost } from "../context/PostContext";
import actionTypes from "../actions/types";
import EditForm from "./EditForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  title: {
    padding: theme.spacing(2),
    marginBottom: 16,
    fontSize: 14,
  },
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  
    textAlign: 'center',
    
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: theme.spacing(3),
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
}));

const PostDetails = () => {
  const classes = useStyles();
  const { post, dispatch } = usePost();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState({
    id: null,
    title: "",
    post: "",
  });
 
  const removepost = (id) => {
    dispatch({ type: actionTypes.REMOVE_POST, data: id });
  };

  const updatepost = (post) => {
    dispatch({ type: actionTypes.UPDATE_POST, data: post });
  };

  const handleEdit = (post) => {
    setSelected(post);
    setShow(true);
    setOpen(true);
  };
  const handleClose = () => setShow(false);

  const handleDelete = (id) => removepost(id);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelected({ ...selected, [name]: value });
  };

  const handleUpdate = () => {
    updatepost(selected);
    setShow(false);
  };

  return (
    <div className={classes.root} role="post_details-id">
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12}>
          {" "}
          <AutoSearch />
        </Grid>
      </Grid>

      <Grid container spacing={3} >
        {post.loading && post.postDetails? (
          <Box m={2} pt={3}>
            <Button color="primary">"Loading !!!"</Button>
          </Box>
        ) : (
          post.postDetails.map((post) => (
            <Grid item xs={3} key={post.id}>
              {" "}
              <Card className={classes.card} key={post.id}>
                <CardContent className={classes.content}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                      Title
                    </Typography>
                    <Typography color="secondary"  data-testid="titleheader">{post.title}</Typography>
                    <Divider className={classes.divider} />
                    <Typography gutterBottom variant="h5" component="div" data-testid="bodyheader">
                      Body
                    </Typography>
                    <Typography variant="body2" color="primary">
                      {post.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(post)}
                      data-testid="edit-button"
                      
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(post.id)}
                      data-testid="delete-button"
                    >
                      DELETE
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
        {post.error ? (
          <Box m={2} pt={3}>
            <Button color="secondary">{post.error}</Button>
          </Box>
        ) : null}

        {show ? (
          <EditForm
            open={open}
            handleInputChange={handleInputChange}
            handleUpdate={handleUpdate}
            handleClose={handleClose}
            selected={selected}
          />
        ) : (
          ""
        )}
      </Grid>
    </div>
  );
};

export default PostDetails;
