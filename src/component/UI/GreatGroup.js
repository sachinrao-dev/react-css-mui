import React from "react";
import useStyle from "../style/GreatGroupStyle";
import ImageSad from "../asset/istoc.jpg";

function GreatGroup() {
  const classes = useStyle();
  return (
    <div className={classes.greatGroupContainer}>
      <div className={classes.greenContainer} />
      <img src={ImageSad} alt="" />
      <div className={classes.peachContainer}>
        <h1>Keys to great group therapy</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly believable
        </p>
      </div>
      <div className={classes.whiteContainer}>
        <h2>What we do</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour
        </p>
      </div>
    </div>
  );
}

export default GreatGroup;
