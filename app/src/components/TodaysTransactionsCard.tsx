import { Paper, Typography, Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { useTransactions } from '../hooks/useTransactions';
import { Transaction } from '../types';

const cardColor = { background: 'linear-gradient(350deg, rgba(255, 137, 179, 0.1) 0%, rgba(255, 137, 179, 0.3) 50%, rgb(255, 137, 179) 150%)' };


export default function TodaysTransactionsCard() {

    const { transactions } = useTransactions();
    const todaysTransactions = transactions.filter((transaction) => dayjs().isSame(dayjs(transaction.attributes.createdAt), 'day')).slice(0, 4);

    return (
        <Paper elevation={1} sx={{ p: 3, borderRadius: "20px", height: "250px", ...cardColor }}>
            <Grid container spacing={0} sx={{ p: 2 }} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ color: "white" }}>
                        Today's Transactions
                    </Typography>
                </Grid>
                {todaysTransactions.length === 0 ?
                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.5 }}>
                        No transactions today.
                    </Typography >
                    : todaysTransactions.map((transaction) => {
                        return (
                            <Grid container xs={12} sx={{ p: 2 }} alignItems="center">
                                <Grid item xs={2}>
                                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.5 }}>
                                        {dayjs(transaction.attributes.createdAt).format('h:mm A')}
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant="subtitle1" sx={{ color: "white" }}>
                                        {transaction.attributes.description}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="subtitle1" sx={{ color: "white" }}>
                                        $ {transaction.attributes.amount.value}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )
                    })}
            </Grid>
        </Paper>
    )
}