import React from "react";
import Button from "@mui/material/Button";
import useStyle from "../style/OnlineCounselingStyle";
import GroupImage from "../asset/groupimage.jpg";
import Laddy from "../asset/gril.png";

function OnlineCounseling() {
  const classes = useStyle();
  return (
    <div className={classes.onlineCounselingContainer}>
      <div className={classes.containerGreen}>
        <img src={Laddy} alt="" />
      </div>
      <div className={classes.imageDiv}>
        <img src={GroupImage} alt="" />
      </div>
      <div className={classes.affordableContainer}>
        <h1>Adorable private online counselling</h1>
        <p>Talked with the licensed professional therapist online</p>
        <Button variant="contained">Get Started</Button>
      </div>
    </div>
  );
}

export default OnlineCounseling;
