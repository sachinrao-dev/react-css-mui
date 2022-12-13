import React from "react";
import useStyle from "../style/SupportGroupStyle";
import image1 from "../asset/group1.png";
import image2 from "../asset/group2.png";
import image3 from "../asset/group3.png";
import image4 from "../asset/group4.png";

function SupportGroup() {
  const classes = useStyle();
  return (
    <div className={classes.supportGroupContainer}>
      <div className={classes.imageContainer}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <div className={classes.imageText}>
          <h1>Group therapy vs Support Group</h1>
          <div className={classes.textPara}>
            <p>
              Image paragraph About Us Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry is standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportGroup;
