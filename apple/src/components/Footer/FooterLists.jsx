import Box from "@mui/material/Box";
import Shopandlearn from "./Shopandlearn";
import Services from "./Services";
import Account from "./Account";
import Applestore from "./Applestore";
import ForBusiness from "./ForBusiness";
import Foreducation from "./Foreducation";
import ForHealthcare from "./ForHealthcare";
import Forgovernment from "./Forgovernment";
import Applevalues from "./Applevalues";
import Aboutapple from "./Aboutapple";
const FooterLists = () => {
  return (
    <>
      <Box>
        <Shopandlearn />
      </Box>
      <Box>
        <Services />
        <Account />
      </Box>
      <Box>
        <Applestore />
      </Box>
      <Box>
        <ForBusiness />
        <Foreducation />
        <ForHealthcare />
        <Forgovernment />
      </Box>
      <Box>
        <Applevalues />
        <Aboutapple />
      </Box>
    </>
  );
};
export default FooterLists;
