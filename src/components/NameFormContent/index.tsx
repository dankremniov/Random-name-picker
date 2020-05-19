import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from "./styles";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
} & WithStyles<typeof styles>;

const NameFormContent = ({ value, onChange, onSubmit, classes }: Props) => {
  return (
    <div className={classes.root}>
      <TextField
        placeholder="Please specify a name"
        value={value}
        onChange={onChange}
      />
      <div className={classes.button}>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(NameFormContent);
