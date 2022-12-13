import React from "react";
import useStyle from "../style/FooterStyle";

function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerText}>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
        </p>
      </div>
    </div>
  );
}

export default Footer;
