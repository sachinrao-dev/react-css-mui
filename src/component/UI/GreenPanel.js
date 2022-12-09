import React from "react";
import Button from "@mui/material/Button";
import useStyle from "../style/GreenPanelStyle";
import GropuImage from "../asset/groupimage.jpg";

function GreenPanel() {
  const classes = useStyle();
  return (
    <div className={classes.greenPanelContainer}>
      <div className={classes.pinkContainer}>
        <div className={classes.groupImage}>
          <img src={GropuImage} alt="" />
        </div>
      </div>
      <div className={classes.textPara}>
        <div className={classes.text}>
          <h1>What is Group psychotherapy ?</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
          </p>
          <Button variant="contained">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default GreenPanel;
