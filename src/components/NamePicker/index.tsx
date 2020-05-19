import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from "./styles";

type Props = {
  name: string | null;
  disabled: boolean;
  onClick: () => void;
} & WithStyles<typeof styles>;

const NamePicker = ({ name, disabled, onClick, classes }: Props) => {
  return (
    <div className={classes.root}>
      <div className={classes.name}>
        <Typography>
          <span data-testid="random-name">{name}</span>
        </Typography>
      </div>
      <div className={classes.button}>
        <Button
          variant="contained"
          color="primary"
          disabled={disabled}
          onClick={onClick}
        >
          Pick random
        </Button>
      </div>
      <div className={classes.error}>
        {disabled ? (
          <Typography color="error">
            At least two names have to be added.
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

export default withStyles(styles)(NamePicker);
