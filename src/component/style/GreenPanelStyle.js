import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  greenPanelContainer: {
    width: "100%",
    height: "700px",
    background: "#3a3740",
    position: "relative",
  },
  pinkContainer: {
    display: "block",
    background: "#eef086",
    justifyContent: "center",
    margin: "0 auto",
    width: "25%",
    height: "100%",
  },
  groupImage: {
    position: "absolute",
    left: "27%",
    bottom: "20%",
  },
  textPara: {
    height: "370px",
    width: "25%",
    background: "#fff",
    position: "absolute",
    bottom: "0%",
    left: "17%",
  },
  text: {
    padding: "7px",
    textAlign: "center",
    "& button": {
      background: "#3d3e6b",
      borderRadius: "10px",
    },
  },
});

export default useStyle;
