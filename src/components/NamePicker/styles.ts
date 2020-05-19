import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: theme.spacing(4),
    },
    name: {
      maxWidth: "100%",
      minWidth: 280,
      height: 50,
      backgroundColor: theme.palette.grey[100],
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
