import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const Applevalues = () => {
  return (
    <List>
      <ListItemText primary={<Typography variant="body2" style={{fontSize:'0.8rem'}}>Apple Values</Typography>}/>
      <ListItemText>Accessibility</ListItemText>
      <ListItemText>Education</ListItemText>
      <ListItemText>Environment</ListItemText>
      <ListItemText>Inclusion and Diversity</ListItemText>
      <ListItemText>Privacy</ListItemText>
      <ListItemText>Racial Equity and Justice</ListItemText>
      <ListItemText>Supplier Responsibility</ListItemText>
    </List>
  );
};
export default Applevalues;