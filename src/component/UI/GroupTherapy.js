/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";
import useStyle from "../style/GroupTherapyStyle";
import groupTherapy from "../asset/grouptherapy.jpg";

function GroupTherapy() {
  const classes = useStyle();
  return (
    <div className={classes.groupContainer}>
      <div className={classes.imagePara}>
        <img src={groupTherapy} alt="" />
        <div className={classes.paraContainer}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable
          </p>
          <Button variant="outlined">LEARN MORE</Button>
        </div>
      </div>
      <div className={classes.findContainer}>
        <h1>Find the best group therapy </h1>
        <EastIcon />
        <p>
          Image from
          <a>Freepik</a>
        </p>
      </div>
    </div>
  );
}

export default GroupTherapy;
