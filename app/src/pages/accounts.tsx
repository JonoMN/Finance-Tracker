import { Grid, Typography } from '@mui/material';
import AccountCard from '../components/AccountCard';
import { useAccounts } from '../hooks/useAccounts'

const Accounts: React.FC = () => {
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
                        <AccountCard accountName={account.attributes.displayName} colorIndex={colorIndex} value={parseFloat(account.attributes.balance.value)} type={account.attributes.accountType} />
                    </Grid>
                )
            })}
        </Grid>
    );
};
export default Accounts;