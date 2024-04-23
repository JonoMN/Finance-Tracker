import { Link, useLocation } from "react-router-dom";
import { Box, Drawer, Button, Grid } from '@mui/material';

import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';

const DRAWER_WIDTH = 300;
const UP_NAV_LOGO = "UP_NAV_LOGO.gif";
const UP_NAV_FOOTER = "UP_NAV_FOOTER.svg";

export default function NavBar() {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path: string) => currentPath === path;

    const activeStyle = {
        background: 'linear-gradient(25deg, rgba(47, 47, 47, 0.1) 0%, rgba(47, 47, 47, 0.1) 30%, rgb(255, 121, 99) 150%)'
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WIDTH,
                        boxSizing: 'border-box',
                        backgroundColor: '#151515',
                        display: 'flex',
                        flexDirection: 'column'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Grid container spacing={2} sx={{ p: 3 }}>
                    <Grid item xs={12} >
                        <img src={UP_NAV_LOGO} alt="Logo" width="64px" />
                    </Grid>
                    <Grid item xs={12} >
                        <Button component={Link} to="/" startIcon={<DashboardRoundedIcon />} sx={{ width: '100%', ...(isActive('/') ? activeStyle : {}) }}>
                            Dashboard
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button component={Link} to="/accounts" startIcon={<SavingsRoundedIcon />} sx={{ width: '100%', ...(isActive('/accounts') ? activeStyle : {}) }}>
                            Accounts
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button component={Link} to="/transactions" startIcon={<ReceiptRoundedIcon />} sx={{ width: '100%', ...(isActive('/transactions') ? activeStyle : {}) }}>
                            Transactions
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: 'auto' }}>
                    <img src={UP_NAV_FOOTER} alt="Logo" width="450px" style={{ marginLeft: -200 }} />
                </Grid>
            </Drawer>
        </Box>
    );
}