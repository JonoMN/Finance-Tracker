import { Paper, Typography, Box } from '@mui/material';

import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

type Props = {
    title: string;
    color: string;
    value?: number;
}

const colorStyles: { [key: string]: { background: string } } = {
    yellow: { background: 'linear-gradient(25deg, rgba(47, 47, 47, 0.1) 0%, rgba(47, 47, 47, 0.1) 30%, rgb(255, 239, 107) 150%)' },
    blue: { background: 'linear-gradient(25deg, rgba(47, 47, 47, 0.1) 0%, rgba(47, 47, 47, 0.1) 30%, rgb(62, 168, 244) 150%)' },
    red: { background: 'linear-gradient(25deg, rgba(47, 47, 47, 0.1) 0%, rgba(47, 47, 47, 0.1) 30%, rgb(230, 111, 92) 150%)' },
    green: { background: 'linear-gradient(25deg, rgba(47, 47, 47, 0.1) 0%, rgba(47, 47, 47, 0.1) 30%, rgb(47, 84, 84) 150%)' },
    default: { background: 'linear-gradient(25deg, rgba(47, 47, 47, 0.1) 0%, rgba(47, 47, 47, 0.1) 30%, rgb(255, 239, 107) 150%)' }
};

const cardColor = (color: string) => colorStyles[color] || colorStyles.default;

export default function DashSummaryCard(props: Props) {
    return (
        <Paper elevation={0} sx={{ p: 3, borderRadius: "20px", ...cardColor(props.color) }}>
            <AttachMoneyOutlinedIcon sx={{ color: "white", width: "40px", height: "40px" }} />
            <Box sx={{ pt: 5 }}>
                <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.4 }}>
                    {props.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "white" }}>
                    $ {props.value}
                </Typography>
            </Box>
        </Paper >
    );
}