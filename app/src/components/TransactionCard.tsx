import { Typography, Grid, Paper } from '@mui/material';
import dayjs from 'dayjs';

type Props = {
    createdAt: string;
    category?: string;
    description: string;
    amount: string;
}

const colorStyles: { [key: string]: { background: string } } = {
    debit: { background: 'linear-gradient(350deg, rgba(47, 47, 47, 0.1) 0%, rgba(47, 47, 47, 0.1) 30%, rgb(230, 111, 92) 150%)' },
    credit: { background: 'linear-gradient(350deg, rgba(47, 47, 47, 0.1) 0%, rgba(47, 47, 47, 0.1) 30%, rgb(47, 84, 84) 150%)' },
};

const cardColor = (colorIndex: string) => colorStyles[colorIndex] || colorStyles.default;

export default function TransactionBlock(props: Props) {
    return (
        <Paper elevation={1} sx={{ m: 2, borderRadius: "20px", ...cardColor(parseFloat(props.amount) < 0 ? "debit" : "credit") }}>
            <Grid container spacing={0} sx={{ p: 2 }} alignItems="center">
                <Grid item xs={2}>
                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.4 }}>
                        {dayjs(props.createdAt).format('h:mm A')}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.4 }}>
                        {dayjs(props.createdAt).format('DD/MM/YYYY')}
                    </Typography >
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.4 }}>
                        {props.category ? props.category : "no category"}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "white" }}>
                        {props.description}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6" sx={{ color: "white" }}>
                        $ {props.amount}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};
