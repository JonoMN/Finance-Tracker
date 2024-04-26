import { Grid, Typography } from '@mui/material';
import TransactionBlock from '../components/TransactionCard';
import { useTransactions } from '../hooks/useTransactions';

const Transactions = () => {
    const { transactions } = useTransactions();

    return (
        <Grid container spacing={2} sx={{ p: 5 }}>
            <Grid item xs={12}>
                <Typography variant="h3" sx={{ color: "white" }}>
                    Transactions
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {transactions.map((transaction) => {
                    return (
                        <TransactionBlock createdAt={transaction.attributes.createdAt} category={transaction.relationships.category.data?.id} description={transaction.attributes.description} amount={transaction.attributes.amount.value} />
                    )
                })}
            </Grid>
        </Grid>
    );
};
export default Transactions;