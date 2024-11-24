import React from "react";
import { Popper, Paper, Typography } from "@material-ui/core";

const DetailedTaskCardPopper = ({ anchorEl, open, task }) => {
  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom">
      <Paper style={{ padding: "16px", maxWidth: "300px" }}>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body1">{task.description}</Typography>
        <Typography variant="body2" color="textSecondary">
          Due Date: {task.dueDate}
        </Typography>
      </Paper>
    </Popper>
  );
};

export default DetailedTaskCardPopper;
