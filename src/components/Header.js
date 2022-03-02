import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  topHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "Blue",
    color: "white",
    padding: "0 16px",
  },
  topHeaderText: {
    fontSize: "25px",
  },
});
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.topHeaderContainer}>
      <p className={`pt-3 ${classes.topHeaderText}`}>Chat Application</p>
    </div>
  );
}

export default Header;
