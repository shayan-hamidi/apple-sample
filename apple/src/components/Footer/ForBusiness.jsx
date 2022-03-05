import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const ForBusiness = () => {
  return (
    <List>
      <ListItemText primary={<Typography variant="body2" style={{fontSize:'0.8rem'}}>For Business</Typography>}/>
      <ListItemText>Apple and Business</ListItemText>
      <ListItemText>Shop for Business</ListItemText>
    </List>
  );
};
export default ForBusiness;