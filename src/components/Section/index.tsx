import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from "./styles";

type Props = {
  title: string;
  children: React.ReactNode;
} & WithStyles<typeof styles>;

const Section = ({ title, children, classes }: Props) => {
  return (
    <Paper>
      <div className={classes.content}>
        <Typography variant="h5">{title}</Typography>
        {children}
      </div>
    </Paper>
  );
};

export default withStyles(styles)(Section);
