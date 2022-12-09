import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import useStyle from "../style/HeaderStyle";

function Header() {
  const classes = useStyle();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.logo}>
        <h1>logo</h1>
      </div>
      <div className={classes.option}>
        <ReorderIcon />
      </div>
    </div>
  );
}

export default Header;
