import { Paper, Typography, Box, Grid } from '@mui/material';

type Props = {

}

const cardColor = { background: 'linear-gradient(25deg, rgba(47, 47, 47, 0.1) 0%, rgba(47, 47, 47, 0.1) 30%, rgb(47, 84, 84) 150%)' };

export default function ExpenseCategoriesCard(props: Props) {
    return (
        <Paper elevation={0} sx={{ p: 3, borderRadius: "20px", ...cardColor }}>
            <Grid container spacing={0} sx={{ p: 2 }} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ color: "white" }}>
                        Expense Categories
                    </Typography>
                </Grid>
                <Grid item xs={8}>

                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
        </Paper>
    )
}