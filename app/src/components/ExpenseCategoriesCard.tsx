import { Paper, Typography, Box, Grid } from '@mui/material';
import { PieChart, Pie, Sector, Cell, Legend, Tooltip } from 'recharts';
import { useTransactions } from '../hooks/useTransactions';

const cardColor = { background: 'linear-gradient(350deg, rgba(47, 84, 84, 0.1) 0%, rgba(47, 84, 84, 0.3) 50%, rgb(47, 84, 84) 150%)' };

const COLORS = ['#FFEF6B', '#3EA8F4', '#E66F5C', '#FF89B3', '#2F5454'];

interface TotalsByCategory {
    [key: string]: number;
}

export default function ExpenseCategoriesCard() {

    const { transactions } = useTransactions();

    const totalsByCategoryId: TotalsByCategory = {};

    transactions.forEach(transaction => {
        const { relationships, attributes } = transaction;
        const categoryId = relationships.category.data?.id;
        const amount = parseFloat(attributes.amount.value);

        if (amount < 0) {
            if (!totalsByCategoryId[categoryId]) {
                totalsByCategoryId[categoryId] = 0;
            }
            totalsByCategoryId[categoryId] += amount * -1;
        }

    });

    const result = Object.keys(totalsByCategoryId).map(categoryId => ({
        name: " " + categoryId,
        value: totalsByCategoryId[categoryId]
    }));

    console.log(result);

    return (
        <Paper elevation={1} sx={{ p: 3, borderRadius: "20px", height: "250px", ...cardColor }}>
            <Grid container spacing={0} sx={{ p: 2 }} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ color: "white" }}>
                        Expense Categories
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <PieChart width={500} height={200}>
                        <Pie
                            data={result}
                            cx={100}
                            cy={100}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {result.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend
                            layout="vertical"
                            align="right"
                            verticalAlign="middle"
                            iconType="circle"
                        />
                    </PieChart>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
        </Paper>
    )
}