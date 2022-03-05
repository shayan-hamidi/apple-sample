import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
const Account = () => {
  return (
    <List>
      <ListItemText primary={<Typography variant="body2" style={{fontSize:'0.8rem'}}>Account</Typography>}/>
      <ListItemText>Mange Yout Apple ID</ListItemText>
      <ListItemText>Apple Store Account</ListItemText>
      <ListItemText>iCloud.com</ListItemText>
    </List>
  );
};
export default Account;