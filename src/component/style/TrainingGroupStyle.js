import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  trainingGroupContainer: {
    width: "100%",
    marginTop: "7%",
  },
  innerContainer: {
    width: "70%",
    margin: "0 auto",
    textAlign: "center",
    marginTop: "20px",
    padding: "20px",
  },
  iconContainer: {
    background: "red",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  innerLogoContainer: {
    display: "flex",
    padding: "10px",
    "& img": {
      height: "70px",
    },
  },
  paraText: {
    marginLeft: "10px",
    textAlign: "left",
    paddingLeft: "10px",
  },
});

export default useStyle;
