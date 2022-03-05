import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const Forgovernment = () => {
  return (
    <List>
      <ListItemText primary={<Typography variant="body2" style={{fontSize:'0.8rem'}}>For Government</Typography>}/>
      <ListItemText>Shop for Government</ListItemText>
      <ListItemText>Shop for Veterans and Militery</ListItemText>
    </List>
  );
};
export default Forgovernment;