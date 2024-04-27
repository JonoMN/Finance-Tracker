import { Paper, Typography, Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { useTransactions } from '../hooks/useTransactions';
import { Transaction } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const cardColor = { background: 'linear-gradient(350deg, rgba(62, 168, 244, 0.1) 0%, rgba(62, 168, 244, 0.3) 50%, rgb(62, 168, 244) 150%)' };

interface DataByDay {
    [key: number]: number;
}

export default function MonthlyComparisonCard() {

    const { transactions } = useTransactions();

    const lastMonth = dayjs().subtract(1, 'month').month();
    const thisMonth = dayjs().month();

    const dataByDayPrev: DataByDay = {};
    const dataByDay: DataByDay = {};

    for (let i = 1; i <= 31; i++) {
        dataByDay[i] = 0;
        dataByDayPrev[i] = 0;
    }

    transactions.forEach(transaction => {
        const { attributes } = transaction;
        const dateCreated = dayjs(attributes.createdAt);
        const amount = parseFloat(attributes.amount.value);

        if (amount < 0) {
            const dayOfMonth = dateCreated.date();
            if (dateCreated.month() === thisMonth) {
                dataByDay[dayOfMonth] = (dataByDay[dayOfMonth] || 0) + amount * -1;
            }
            if (dateCreated.month() === lastMonth) {
                dataByDayPrev[dayOfMonth] = (dataByDayPrev[dayOfMonth] || 0) + amount * -1;
            }
        }
    });

    const result = [];

    for (let day = 1; day <= 31; day++) {
        result.push({
            name: day.toString(),
            lastMonth: dataByDayPrev[day] || 0,
            thisMonth: dataByDay[day] || 0
        });
    }

    console.log(result);
    return (
        <Paper elevation={1} sx={{ p: 3, borderRadius: "20px", ...cardColor }}>
            <Grid container spacing={0} sx={{ p: 2 }} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ color: "white" }}>
                        Monthly Expense Comparison
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.5 }}>
                        {dayjs().subtract(1, 'month').format('MMMM')} vs. {dayjs().format('MMMM')}
                    </Typography >
                </Grid>
                <Grid item xs={12}>
                    <LineChart
                        width={1400}
                        height={200}
                        data={result}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="lastMonth" stroke="#8884d8" />
                        <Line type="monotone" dataKey="thisMonth" stroke="#82ca9d" activeDot={{ r: 8 }} />
                    </LineChart>
                </Grid>
            </Grid>
        </Paper>
    )
}
