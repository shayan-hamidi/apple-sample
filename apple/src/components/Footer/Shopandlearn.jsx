import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const Shopandlearn = () => {
  return (
    <List>
      <ListItemText primary={<Typography variant="body2" style={{fontSize:'0.8rem'}}>Shop and learn</Typography>}/>
      <ListItemText>Store</ListItemText>
      <ListItemText>Mac</ListItemText>
      <ListItemText>iPad</ListItemText>
      <ListItemText>iPhone</ListItemText>
      <ListItemText>Watch</ListItemText>
      <ListItemText>AirPods</ListItemText>
      <ListItemText>TV & Home</ListItemText>
      <ListItemText>iPod touch</ListItemText>
      <ListItemText>Air Tag</ListItemText>
      <ListItemText>Accessories</ListItemText>
      <ListItemText>Gift Cards</ListItemText>
    </List>
  );
};
export default Shopandlearn;