import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const Services = () => {
  return (
    <List>
      <ListItemText primary={<Typography variant="body2" style={{fontSize:'0.8rem'}}>Services</Typography>}/>
      <ListItemText>Apple Music</ListItemText>
      <ListItemText>Apple TV+</ListItemText>
      <ListItemText>Apple Fitness+</ListItemText>
      <ListItemText>Apple News+</ListItemText>
      <ListItemText>Apple Arcade</ListItemText>
      <ListItemText>iCloud</ListItemText>
      <ListItemText>Apple One</ListItemText>
      <ListItemText>Apple Card</ListItemText>
      <ListItemText>Apple Books</ListItemText>
      <ListItemText>Apple Podcasts</ListItemText>
      <ListItemText>App Store</ListItemText>
    </List>
  );
};
export default Services;