import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const Aboutapple = () => {
  return (
    <List>
      <ListItemText primary={<Typography variant="body2" style={{fontSize:'0.8rem'}}>About Apple</Typography>}/>
      <ListItemText>Newsroom</ListItemText>
      <ListItemText>Apple Leadership</ListItemText>
      <ListItemText>Career Opportunities</ListItemText>
      <ListItemText>Investors</ListItemText>
      <ListItemText>Ethics & Compliance</ListItemText>
      <ListItemText>Events</ListItemText>
      <ListItemText>Contact Apple</ListItemText>
    </List>
  );
};
export default Aboutapple;