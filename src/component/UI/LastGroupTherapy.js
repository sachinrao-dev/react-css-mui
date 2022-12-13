import React from "react";
import useStyle from "../style/LastGroupTherapyStyle";

function LastGroupTherapy() {
  const classes = useStyle();
  return (
    <div className={classes.lastGroupTherapyContainer}>
      <div className={classes.textContainer}>
        <h1>The Group Therapy</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
      </div>
    </div>
  );
}

export default LastGroupTherapy;
