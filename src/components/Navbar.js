import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 56,
    },
    [theme.breakpoints.up('sm')]: {
        marginBottom: 64,
    },
},
menuButton: {
    marginRight: theme.spacing(1),
},
title: {
    flexGrow: 1,
}, }))
const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     
      <AppBar position='fixed' color='secondary'>
            <Toolbar>
                <IconButton
                    edge='start'
                    className={classes.menuButton}
                    color='inherit'
                    aria-label='menu'>
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    JSON PlaceHolder
                </Typography>
            </Toolbar>
        </AppBar>
     
    </div>
  );
};

export default Navbar;
