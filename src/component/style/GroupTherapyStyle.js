import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  groupContainer: {
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    height: "900px",
    justifyContent: "center",
    position: "relative",
    "& img": {
      height: "500px",
    },
  },
  imagePara: {
    width: "50%",
    margin: "0 auto",
  },
  paraContainer: {
    width: "25%",
    justifyContent: "end",
    position: "absolute",
    right: "24%",
    "& button": {
      borderRadius: "20px",
      borderColor: "#c7bea5",
      color: "#3a3740",
      fontSize: "14px",
    },
  },
  findContainer: {
    left: "23%",
    // top: "400px",
    height: "290px",
    width: "250px",
    background: "#3a3740",
    color: "#fff",
    position: "absolute",
    bottom: "0%",
    textAlign: "left",
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    "& svg": {
      height: "40px",
      width: "50px",
      marginBottom: "30px",
    },
  },
});

export default useStyle;
