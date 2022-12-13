import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  onlineCounselingContainer: {
    width: "100%",
    position: "relative",
  },
  imageDiv: {
    "& img": {
      position: "absolute",
      top: "5%",
      left: "15%",
      height: "420px",
      width: "70%",
    },
  },
  containerGreen: {
    width: "50%",
    height: "800px",
    background: "#3a3740",
    position: "relative",
    "& img": {
      position: "absolute",
      bottom: "10%",
      left: "35%",
      zIndex: "999",
      height: "350px",
      width: "35%",
    },
  },
  affordableContainer: {
    height: "400px",
    width: "300px",
    background: "#eef086",
    position: "absolute",
    bottom: "10%",
    right: "38%",
    paddingLeft: "15px",
    paddingTop: "10p",
    paddingRight: "15px",
    "& button": {
      background: "#3a3740",
      borderRadius: "22px",
      marginTop: "39px",
    },
  },
});

export default useStyle;
