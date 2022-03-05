import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const ForHealthcare = () => {
  return (
    <List>
      <ListItemText primary={<Typography variant="body2" style={{fontSize:'0.8rem'}}>For Healthcare</Typography>}/>
      <ListItemText>Apple in Healthcare</ListItemText>
      <ListItemText>Health on Apple Watch</ListItemText>
      <ListItemText>Health Records on iPhone</ListItemText>
    </List>
  );
};
export default ForHealthcare;