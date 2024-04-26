import { Paper, Typography, Box, Grid } from '@mui/material';

type Props = {
    accountName: string;
    colorIndex: number;
    value?: number;
    type: string;
}

const colorStyles: { [key: string]: { background: string } } = {
    0: { background: 'linear-gradient(350deg, rgba(255, 239, 107, 0.1) 0%, rgba(255, 239, 107, 0.3) 50%, rgb(255, 239, 107) 150%)' },
    1: { background: 'linear-gradient(350deg, rgba(62, 168, 244, 0.1) 0%, rgba(62, 168, 244, 0.3) 50%, rgb(62, 168, 244) 150%)' },
    2: { background: 'linear-gradient(350deg, rgba(230, 111, 92, 0.1) 0%, rgba(230, 111, 92, 0.3) 50%, rgb(230, 111, 92) 150%)' },
    3: { background: 'linear-gradient(350deg, rgba(47, 84, 84, 0.1) 0%, rgba(47, 84, 84, 0.3) 50%, rgb(47, 84, 84) 150%)' },
    4: { background: 'linear-gradient(350deg, rgba(255, 137, 179, 0.1) 0%, rgba(255, 137, 179, 0.3) 50%, rgb(255, 137, 179) 150%)' },
};

const cardColor = (colorIndex: number) => colorStyles[colorIndex] || colorStyles.default;

export default function DashSummaryCard(props: Props) {
    return (
        <Paper elevation={1} sx={{ p: 2, borderRadius: "20px", ...cardColor(props.colorIndex) }}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item sx={{ pl: 4 }}>
                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.5 }}>
                        {props.type}
                    </Typography>
                    <Typography variant="h5" sx={{ color: "white" }}>
                        {props.accountName}
                    </Typography>
                </Grid>
                <Grid item sx={{ pr: 4 }}>
                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.5 }}>
                        Balance
                    </Typography>
                    <Typography variant="h5" sx={{ color: "white" }}>
                        $ {props.value}
                    </Typography>

                </Grid>
            </Grid>
        </Paper >
    );
}