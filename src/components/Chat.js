import React from "react";
import { getNameInitials } from "../utils";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  message: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  messageTop: {
    display: "flex",
  },
  authorName: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "1px solid black",
    marginRight: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  messageText: {
    padding: "7px",
    borderRadius: "7px",
    backgroundColor: "blue",
    color: "white",
  },
  messageBottom: {
    fontSize: "10px",
  },

  own: {
    alignItems: "flex-end",
    backgroundColor: "#e4e2e2",
    color: "#333333",
  },
});

function Chat({ message, own }) {
  const classes = useStyles();
  return (
    <div className={`${classes.message} ${own ? classes.own : ""}`}>
      <div className={classes.messageTop}>
        <div className={classes.authorName}>
          {own ? "Me" : getNameInitials(message.author)}
        </div>

        <p className={classes.messageText}>{message.text}</p>
      </div>
      <div className={classes.messageBottom}>{message.createdDate}</div>
    </div>
  );
}

export default Chat;
