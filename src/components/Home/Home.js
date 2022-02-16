import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

import Form from "../Form/Form";
import Items from "../Items/Items";
import { getItems } from "../../actions/items";

function Home() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      <Grow in>
        <Container className={classes.container}>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid
              item
              xs={12}
              sm={12}
            >
              <Items />
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <Form /> */}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default Home;
