import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

type Props = {
  names: string[];
  onDelete: (n: string) => void;
};

const NameList = ({ names, onDelete }: Props) => {
  return (
    <List>
      {names.map((n, i) => {
        return (
          <div data-testid="name" key={n}>
            <ListItem disableGutters>
              <ListItemText primary={n} />
              <ListItemSecondaryAction>
                <IconButton
                  data-testid="delete-name"
                  onClick={() => onDelete(n)}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            {i !== names.length - 1 ? <Divider /> : null}
          </div>
        );
      })}
    </List>
  );
};

export default NameList;
