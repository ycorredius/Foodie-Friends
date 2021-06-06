import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import RecipeCard from './RecipeCard'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
}));

export const Recipes = (props) =>{
      const classes = useStyles();
    if(!props.recipes){
        return(
                <div>
            </div>
        )
    } else {
        return (
          <div>
            <Grid
              container
              space={4}
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.root}
            >
              {props.recipes.map((recipe) => (
                <Grid item>
                  <Paper className={classes.paper}>
                    <RecipeCard recipe={recipe} handClick={props.handClick} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
        );
    } 
}