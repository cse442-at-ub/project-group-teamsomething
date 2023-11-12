import { Box, Grid, Stack, Typography } from "@mui/material";
import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";
import PropTypes from 'prop-types';
import gPayLogo from '../../../assets/gpay-logo.svg'
import paypalLogo from '../../../assets/paypal-logo.svg'
import Footer from "../../../components/Footer/Footer";


const TableItem = ({ label, value, isLink }) => {
  return (
    <Stack direction="row" sx={{borderBottom: '1px solid'}}
    >
      <Typography flex={1} fontWeight='bold' variant="body2">{label}</Typography>
      <Typography flex={1} variant="body2"
        sx={{
          color: isLink ?'#1e92e8' : 'inherit',
          cursor: isLink ? 'pointer' : 'inherit'
        }}
      >{value}</Typography>
    </Stack>
  )

}

TableItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isLink: PropTypes.bool
};

const btnStyle = 'bg-[#E8E9F4] font-bold py-3 px-4 rounded-xl text-lg flex items-center justify-center shadow-md'

const Payment = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={2}>
        <UserSidebar />
      </Grid>
      <Grid item xs={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100vh',
          overflow: 'scroll'
        }}
      >
        <Box p={3} flex={1}>
          <Typography mb={3} variant="h6">Payment Method</Typography>
          <Typography mb={2} variant="body1">Current Balance: <span className="font-bold">$30</span></Typography>
          <Stack maxWidth={400} spacing={1}>
            <TableItem label="Method" value="Direct Deposit" />
            <TableItem label="Bank" value="Paypal" />
            <TableItem label="Account Holder" value="Lindsay Dun" />
            <TableItem label="Account Type" value="Checking" />
            <TableItem label="Options" value="Change Deposit Details" isLink />
          </Stack>
          <Stack mt={5} maxWidth={450} spacing={2}>
            <Typography variant="body2" fontWeight='bold'>Replenish?</Typography>
            <button className={btnStyle}>
              Google Pay
              <img src={gPayLogo} className="ml-2" alt="Google Pay" width={30} />
            </button>
            <button className={btnStyle}>
              Paypal
              <img src={paypalLogo} className="ml-2" alt="Google Pay" width={30} />
            </button>
          </Stack>
          <Stack mt={5} maxWidth={400}>
            <Typography variant="text">
              Have any questions? Check out our <a href="#" className="text-[#1e92e8]">Payment policy</a> or
              <a href="#" className="text-[#1e92e8]"> Contact us</a> with any questions
            </Typography>
          </Stack>
        </Box>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Payment;
