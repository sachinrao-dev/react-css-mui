import { makeStyles } from "@mui/styles";
import BackgroundImage from "../asset/GroupTherapy.png";

const useStyle = makeStyles({
  lastGroupTherapyContainer: {
    backgroundImage: `url(${BackgroundImage})`,
    height: "650px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    right: "20%",
    bottom: "10%",
    background: "#fff",
    height: "350px",
    width: "300px",
    paddingTop: "20px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
});

export default useStyle;
