import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    button: {
      marginLeft: theme.spacing(3),
    },
  });
