import React from "react";
import useStyle from "../style/TrainingGroupStyle";
import Icon1 from "../asset/icon1.png";
import Icon2 from "../asset/icon2.png";
import Icon3 from "../asset/icon3.png";
import Icon4 from "../asset/icon4.png";

function TrainingGroup() {
  const classes = useStyle();
  return (
    <div className={classes.trainingGroupContainer}>
      <div className={classes.innerContainer}>
        <h1>Online Process-oriented Training Group</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly believable
        </p>
        <div className={classes.logoContainer}>
          <div className={classes.innerLogoContainer}>
            <img src={Icon1} alt="" />
            <div className={classes.paraText}>
              <h2>Pre- Group Meeting</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have
              </p>
            </div>
          </div>
          <div className={classes.innerLogoContainer}>
            <img src={Icon2} alt="" />
            <div className={classes.paraText}>
              <h1>Professional Therapist</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the
              </p>
            </div>
          </div>
        </div>
        <div className={classes.logoContainer}>
          <div className={classes.innerLogoContainer}>
            <img src={Icon3} alt="" />
            <div className={classes.paraText}>
              <h2>Pre- Group Meeting</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have
              </p>
            </div>
          </div>
          <div className={classes.innerLogoContainer}>
            <img src={Icon4} alt="" />
            <div className={classes.paraText}>
              <h1>Professional Therapist</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingGroup;
