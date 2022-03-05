import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const Foreducation = () => {
  return (
    <List>
      <ListItemText primary={<Typography variant="body2" style={{fontSize:'0.8rem'}}>For Education</Typography>}/>
      <ListItemText>Apple and Education</ListItemText>
      <ListItemText>Shop for K-12</ListItemText>
      <ListItemText>Shop for College</ListItemText>
    </List>
  );
};
export default Foreducation;