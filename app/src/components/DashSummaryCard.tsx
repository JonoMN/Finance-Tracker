import { Paper, Typography, Box } from '@mui/material';

import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

type Props = {
    title: string;
    subTitle: string;
    color: string;
    value?: number;
    emoji: string;
}

const colorStyles: { [key: string]: { background: string } } = {
    yellow: { background: 'linear-gradient(350deg, rgba(255, 239, 107, 0.1) 0%, rgba(255, 239, 107, 0.3) 50%, rgb(255, 239, 107) 100%)' },
    blue: { background: 'linear-gradient(350deg, rgba(62, 168, 244, 0.1) 0%, rgba(62, 168, 244, 0.3) 50%, rgb(62, 168, 244) 100%)' },
    red: { background: 'linear-gradient(350deg, rgba(230, 111, 92, 0.1) 0%, rgba(230, 111, 92, 0.3) 50%, rgb(230, 111, 92) 100%)' },
    green: { background: 'linear-gradient(350deg, rgba(47, 84, 84, 0.1) 0%, rgba(47, 84, 84, 0.3) 50%, rgb(47, 84, 84) 100%)' },
    default: { background: 'linear-gradient(350deg, rgba(255, 239, 107, 0.1) 0%, rgba(255, 239, 107, 0.3) 50%, rgb(255, 239, 107) 100%)' }
};

const cardColor = (color: string) => colorStyles[color] || colorStyles.default;

export default function DashSummaryCard(props: Props) {
    return (
        <Paper elevation={1} sx={{ p: 3, borderRadius: "20px", ...cardColor(props.color) }}>
            <Typography variant='h3'>
                {props.emoji}
            </Typography>
            <Box sx={{ pt: 5 }}>
                <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.5 }}>
                    {props.subTitle}
                </Typography>
                <Typography variant="h5" sx={{ color: "white" }}>
                    {props.title}
                </Typography>
                <Typography variant="h5" sx={{ color: "white" }}>
                    $ {props.value}
                </Typography>
            </Box>
        </Paper >
    );
}