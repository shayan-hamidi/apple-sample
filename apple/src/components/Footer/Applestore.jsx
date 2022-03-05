import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const Applestore = () => {
  return (
    <List>
      <ListItemText primary={<Typography variant="body2" style={{fontSize:'0.8rem'}}>Apple Store</Typography>}/>
      <ListItemText>Find a Store</ListItemText>
      <ListItemText>Genius Bar</ListItemText>
      <ListItemText>Today at Apple</ListItemText>
      <ListItemText>Apple Camp</ListItemText>
      <ListItemText>Apple Store App</ListItemText>
      <ListItemText>Refurbished and Clearance</ListItemText>
      <ListItemText>Financing</ListItemText>
      <ListItemText>Apple Trade In</ListItemText>
      <ListItemText>Order Status</ListItemText>
      <ListItemText>Shopping Help</ListItemText>
    </List>
  );
};
export default Applestore;