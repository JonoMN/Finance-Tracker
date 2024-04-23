import React from 'react';
import { Grid, Typography } from '@mui/material';
import DashSummaryCard from '../components/DashSummaryCard';
import * as AccountUtils from '../utils/accountUtils';
import * as TransactionUtils from '../utils/transactionUtils'
import { useAccounts } from '../hooks/useAccounts'
import { useTransactions } from '../hooks/useTransactions';

const Dashboard: React.FC = () => {

    const { accounts } = useAccounts();
    const { transactions } = useTransactions();
    const balance = AccountUtils.calculateTotalBalance(accounts);
    const profitLoss = TransactionUtils.calculateProfitLoss(transactions);
    const income = TransactionUtils.calculateIncome(transactions);
    const expenses = TransactionUtils.calculateExpenses(transactions);

    return (
        <Grid container spacing={3} sx={{ p: 5 }}>
            <Grid item xs={12}>
                <Typography variant="h3" sx={{ color: "white" }}>
                    Dashboard
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Income" color="yellow" value={income} />
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Expenses" color="blue" value={expenses} />
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Profit/Loss" color="red" value={profitLoss} />
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Balance" color="green" value={balance} />
            </Grid>
        </Grid>
    );
};
export default Dashboard;