import React from 'react';
import { Grid, Typography } from '@mui/material';
import DashSummaryCard from '../components/DashSummaryCard';
import * as AccountUtils from '../utils/accountUtils';
import { useAccounts } from '../hooks/useAccounts'

const Dashboard: React.FC = () => {

    const { accounts, error } = useAccounts();
    const balance = AccountUtils.calculateTotalBalance(accounts);

    return (
        <Grid container spacing={3} sx={{ p: 5 }}>
            <Grid item xs={12}>
                <Typography variant="h2" sx={{ color: "white" }}>
                    Dashboard
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Income" color="yellow" />
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Expenses" color="blue" />
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Profit/Loss" color="red" />
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Balance" color="green" value={balance} />
            </Grid>
        </Grid>
    );
};
export default Dashboard;