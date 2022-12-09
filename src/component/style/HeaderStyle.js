import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "",
  },
  logo: {
    background: "white",
    marginLeft: "70px",
    opacity: "0.5",
  },
  option: {
    background: "white",
    marginRight: "70px",
    "& svg": {
      height: "40px",
      width: "30px",
    },
  },
});

export default useStyle;
