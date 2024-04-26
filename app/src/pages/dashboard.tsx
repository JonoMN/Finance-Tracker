import React from 'react';
import { Grid, Typography } from '@mui/material';
import DashSummaryCard from '../components/DashSummaryCard';
import ExpenseCategoriesCard from '../components/ExpenseCategoriesCard'
import TodaysTransactionsCard from '../components/TodaysTransactionsCard'
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
                <DashSummaryCard title="Income" subTitle="Past 30 days" color="yellow" value={income} />
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Expenses" subTitle="Past 30 days" color="blue" value={expenses} />
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Profit/Loss" subTitle="Past 30 days" color="red" value={profitLoss} />
            </Grid>
            <Grid item xs={3}>
                <DashSummaryCard title="Balance" subTitle="Total" color="green" value={balance} />
            </Grid>

            <Grid item xs={6}>
                <ExpenseCategoriesCard />
            </Grid>
            <Grid item xs={6}>
                <TodaysTransactionsCard />
            </Grid>
            <Grid item xs={12}>
                <ExpenseCategoriesCard />
            </Grid>
        </Grid>
    );
};
export default Dashboard;