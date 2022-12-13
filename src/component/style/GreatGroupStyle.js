import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  greatGroupContainer: {
    height: "700px",
    position: "relative",
    marginTop: "30px",
    "& img": {
      position: "absolute",
      top: "10%",
      left: "40%",
    },
  },
  greenContainer: {
    background: "#3a3740",
    height: "460px",
    width: "50%",
    position: "absolute",
    right: "0%",
    bottom: "2%",
  },
  peachContainer: {
    position: "absolute",
    top: "0%",
    left: "30%",
    height: "300px",
    width: "250px",
    background: "#f2cb7c",
    padding: "15px",
  },
  whiteContainer: {
    width: "16%",
    height: "250px",
    position: "absolute",
    bottom: "18%",
    right: "13%",
    background: "#fff",
    paddingLeft: "10px",
    paddingTop: "20px",
  },
});

export default useStyle;
