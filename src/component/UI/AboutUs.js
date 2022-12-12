/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import useStyle from "../style/AboutUsStyle";
import image from "../asset/single.png";

function AboutUs() {
  const classes = useStyle();

  return (
    <div className={classes.aboutUsContainer}>
      <div className={classes.imageContainer}>
        <img src={image} alt="" />
        <p>Image paragraph</p>
      </div>
      <div className={classes.paragraphContainer}>
        <div>
          <h1>About Us</h1>
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.para1}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry is standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className={classes.para2}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry is standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a>learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
