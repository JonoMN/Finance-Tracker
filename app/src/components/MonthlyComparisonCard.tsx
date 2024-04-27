import { Paper, Typography, Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { useTransactions } from '../hooks/useTransactions';
import { Transaction } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const cardColor = { background: 'linear-gradient(350deg, rgba(62, 168, 244, 0.1) 0%, rgba(62, 168, 244, 0.3) 50%, rgb(62, 168, 244) 150%)' };

const data2 = [
    {
        "name": "1",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "2",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "3",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "4",
        "lastMonth": 20,
        "thisMonth": 0
    },
    {
        "name": "5",
        "lastMonth": 20,
        "thisMonth": 30
    },
    {
        "name": "6",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "7",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "8",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "9",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "10",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "11",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "12",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "13",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "14",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "15",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "16",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "17",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "18",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "19",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "20",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "21",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "22",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "23",
        "lastMonth": 0,
        "thisMonth": 2
    },
    {
        "name": "24",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "25",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "26",
        "lastMonth": 0,
        "thisMonth": 1
    },
    {
        "name": "27",
        "lastMonth": 0,
        "thisMonth": 40
    },
    {
        "name": "28",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "29",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "30",
        "lastMonth": 0,
        "thisMonth": 0
    },
    {
        "name": "31",
        "lastMonth": 0,
        "thisMonth": 0
    }
]

const data = [
    {
        name: '1',
        march: 4000,
        april: 2400,
    },
    {
        name: '2',
        march: 3000,
        april: 1398,
    },
    {
        name: '3',
        march: 2000,
        april: 9800,
    },
    {
        name: '4',
        march: 2780,
        april: 3908,
    },
    {
        name: '5',
        march: 1890,
        april: 4800,
    },
    {
        name: '6',
        march: 2390,
        april: 3800,
    },
    {
        name: '7',
        march: 3490,
        april: 4300,
    },
    {
        name: '8',
        march: 3490,
        april: 4300,
    },
    {
        name: '9',
        march: 3490,
        april: 4300,
    },
    {
        name: '10',
        march: 3490,
        april: 4300,
    },
    {
        name: '11',
        march: 3490,
        april: 4300,
    },
    {
        name: '12',
        march: 3490,
        april: 4300,
    },
];

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
