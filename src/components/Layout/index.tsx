import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from "./styles";

type Props = {
  children: React.ReactNode;
} & WithStyles<typeof styles>;

const Layout = ({ children, classes }: Props) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Random name picker</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <div className={classes.content}>{children}</div>
      </Container>
    </>
  );
};

export default withStyles(styles)(Layout);
