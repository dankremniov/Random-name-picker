import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) =>
  createStyles({
    content: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
    },
  });
