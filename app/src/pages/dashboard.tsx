import React from 'react';
import { Grid, Typography } from '@mui/material';
import DashSummaryCard from '../components/DashSummaryCard';

const Dashboard: React.FC = () => {
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
                <DashSummaryCard title="Balance" color="green" />
            </Grid>
        </Grid>
    );
};
export default Dashboard;