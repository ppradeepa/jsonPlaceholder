import React from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import PropTypes from 'prop-types';

const EditForm = (props) => {
  return (
    <div>
      <Dialog open={props.open} role="dialogData">
        <DialogTitle>EditForm</DialogTitle>
        <DialogContent>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Title"
                type="text"
                name="title"
                autoComplete="title"
                variant="outlined"
                onChange={props.handleInputChange}
                value={props.selected.title}
                fullWidth
                data-testid="title"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Body"
                type="text"
                name="body"
                autoComplete="title"
                variant="outlined"
                onChange={props.handleInputChange}
                value={props.selected.body}
                fullWidth
                data-testid="body"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            variant="contained"
            onClick={props.handleClose}
            role="updatebuttondata"
            data-testid="closebutton"
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleUpdate}
            data-testid="updatebutton"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
EditForm.propTypes = {
  title:  PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleClose:PropTypes.func.isRequired,
  handleUpdate:PropTypes.func.isRequired
};

export default EditForm;
