import "./App.css";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Typography sx={{ textAlign: "center", padding: "0.9rem 0rem 0.9rem 0rem",fontSize:"0.9rem",backgroundColor:"rgba(245,245,247,1)"}}>
        <Link
          href="https://www.apple.com/us/shop/goto/shop"
          sx={{
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          Shop online
        </Link>{" "}
        and get Specialist help, free delivery, and more. Some of our stores are
        offering limited services. Before you visit, please check your{" "}
        <Link
          href="https://www.apple.com/retail/"
          sx={{
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          store’s services.
        </Link>
      </Typography>
    </>
  );
}

export default App;
