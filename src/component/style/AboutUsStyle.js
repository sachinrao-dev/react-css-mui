import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  aboutUsContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    margin: "2rem 25rem",
  },
  innerContainer: {
    display: "flex",
  },
  para1: {
    marginRight: "10px",
    marginLeft: "10px",
    width: "15%",
  },
  para2: {
    width: "15%",
    marginLeft: "30px",
  },
  imageContainer: {
    "& img": {
      height: "250px",
      marginRight: "20px",
    },
  },
});

export default useStyle;
