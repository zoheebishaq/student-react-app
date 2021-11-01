import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  header:{
    background: "#03a9f4"
  }
})

export default function HeaderComponent() {
  const classes = useStyle()
  return (
    
      <AppBar className={classes.header}>
        <Toolbar>
          <Typography  variant="h5">
          Application de gestion des étudiants
          </Typography>
        </Toolbar>
      </AppBar>
    
  );
}
