import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: theme.spacing(2),
    },
    name: {
      minWidth: 280,
      minHeight: 50,
      backgroundColor: theme.palette.grey[100],
      marginTop: theme.spacing(2),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      wordBreak: "break-all",
    },
    button: {
      marginTop: theme.spacing(2),
    },
    error: {
      marginTop: theme.spacing(),
      height: 24,
    },
  });
