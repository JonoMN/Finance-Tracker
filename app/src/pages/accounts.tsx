import React from 'react';
import { Grid, Typography } from '@mui/material';
import AccountCard from '../components/AccountCard';
import * as AccountUtils from '../utils/accountUtils';
import * as TransactionUtils from '../utils/transactionUtils'
import { useAccounts } from '../hooks/useAccounts'
import { useTransactions } from '../hooks/useTransactions';

const Accounts = () => {
    const { accounts } = useAccounts();
    let colorIndex = 0;

    return (
        <Grid container spacing={2} sx={{ p: 5 }}>
            <Grid item xs={12}>
                <Typography variant="h3" sx={{ color: "white" }}>
                    Accounts
                </Typography>
            </Grid>
            {accounts.map((account) => {
                colorIndex = colorIndex < 4 ? colorIndex + 1 : 0;
                return (
                    <Grid item xs={12} key={account.id}>
                        <AccountCard accountName={account.attributes.displayName} colorIndex={colorIndex} value={parseFloat(account.attributes.balance.value)} />
                    </Grid>
                )
            })}
        </Grid>
    );
};
export default Accounts;