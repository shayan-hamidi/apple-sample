import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <ListItem
        component="ul"
        disablePadding
        sx={{ display: "flex", flexDirection: "column", width: "70%" }}
      >
        <ListItemText>
          1. Trade-in values vary. Extra trade-in values apply only to Apple
          Watch Series 6, SE, Series 5, Series 4, Series 3, Series 2, and
          require purchase of a new Apple Watch, subject to availability and
          limits. Must be at least 18 years old. Apple or its trade-in partners
          reserve the right to refuse or limit any trade-in transaction for any
          reason. In-store trade-in requires presentation of a valid,
          government-issued photo ID (local law may require saving this
          information). Sales tax may be assessed on full value of new Apple
          Watch. Additional terms from Apple or Apple’s trade-in partners may
          apply.
        </ListItemText>
        <ListItemText>
          2. $4.99/month after free trial. One subscription per Family Sharing
          group. Offer good for 3 months after eligible device activation. Plan
          automatically renews until canceled. Restrictions and other terms
          apply.
        </ListItemText>
        <ListItemText>
          Apple TV+ is $4.99/month after free trial. One subscription per Family
          Sharing group. Offer good for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other terms apply.
        </ListItemText>
        <ListItemText>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings {">"}{" "}
          General {">"}
          Software Update. Tap Download and Install.
        </ListItemText>
        <ListItemText>
          Available for qualifying applicants in the United States. Apple Card
          is issued by Goldman Sachs Bank USA, Salt Lake City Branch. Learn more
          about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218.
        </ListItemText>
      </ListItem>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "65%",
          borderBottom: "1px solid #d2d2d7",
          borderTop: "1px solid #d2d2d7",
        }}
      >
        <Box></Box>
        <Box>
          <Typography  sx={{fontSize:"0.79rem",color:"#6e6e73"}}>
            More ways to shop:{" "}
            <Link
              sx={{
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Find an Apple Store
            </Link>{" "}
            or{" "}
            <Link
              sx={{
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              other retailer
            </Link>{" "}
            near you. Or call 1-800-MY-APPLE.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};
export default Footer;
