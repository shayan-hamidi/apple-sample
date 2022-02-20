import * as React from "react";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Nav = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "rgba(51,51,51,1)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position:"sticky"
        }}
      >
        <List
          disablePadding
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            fontSize: "0.75rem",
            padding: "0px",
            color: "#a7a7a7",
          }}
        >
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png?20200509031052"
              alt="apple-logo"
              width={20}
            />
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            Store
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            Mac
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            iPad
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            iPhone
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            Watch
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            AirPods
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            TV & Home
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            Only On Apple
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            Accessories
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            Support
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0.8rem 1rem 0.8rem 1rem  ",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            <SearchIcon />
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "0rem 1rem 0rem 1rem",
              width: "auto",
              margin: "0rem 0.3rem 0rem 0.3rem",
            }}
          >
            <ShoppingBagOutlinedIcon />
          </ListItem>
        </List>
      </AppBar>
    </>
  );
};
export default Nav;
