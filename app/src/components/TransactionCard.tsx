import { Typography, Grid, Paper } from '@mui/material';
import dayjs from 'dayjs';

type Props = {
    createdAt: string;
    category?: string;
    description: string;
    amount: string;
}

const colorStyles: { [key: string]: { background: string } } = {
    debit: { background: 'linear-gradient(350deg, rgba(230, 111, 92, 0.1) 0%, rgba(230, 111, 92, 0.3) 50%, rgb(230, 111, 92) 100%)' },
    credit: { background: 'linear-gradient(350deg, rgba(47, 84, 84, 0.1) 0%, rgba(47, 84, 84, 0.3) 50%, rgb(47, 84, 84) 100%)' },
};

const cardColor = (colorIndex: string) => colorStyles[colorIndex] || colorStyles.default;

export default function TransactionBlock(props: Props) {
    return (
        <Paper elevation={1} sx={{ mb: 2, borderRadius: "20px", ...cardColor(parseFloat(props.amount) < 0 ? "debit" : "credit") }}>
            <Grid container sx={{ p: 1 }} alignItems="center">
                <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h4">
                        {parseFloat(props.amount) < 0 ? "🧾" : "💸"}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.5 }}>
                        {dayjs(props.createdAt).format('h:mm A')}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.5 }}>
                        {dayjs(props.createdAt).format('DD/MM/YYYY')}
                    </Typography >
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.5 }}>
                        {props.category ? props.category : "no category"}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "white" }}>
                        {props.description}
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'end', pr: 5 }}>
                    <Typography variant="h5" sx={{ color: "white" }}>
                        $ {props.amount}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};
