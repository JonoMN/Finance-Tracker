import { Transaction } from "../types"
import dayjs from 'dayjs';

export const calculateProfitLoss = (transactions: Transaction[]): number => {
    let value = 0;
    transactions.forEach(transaction => {
        if (dayjs(transaction.attributes.settledAt).isAfter(dayjs().subtract(30, 'days'))) {
            value += parseFloat(transaction.attributes.amount.value);
        }
    });
    return value;
};

export const calculateIncome = (transactions: Transaction[]): number => {
    let value = 0;
    transactions.forEach(transaction => {
        if (parseFloat(transaction.attributes.amount.value) > 0
            && dayjs(transaction.attributes.settledAt).isAfter(dayjs().subtract(30, 'days'))) {
            value += parseFloat(transaction.attributes.amount.value);
        }
    });
    return value;
};

export const calculateExpenses = (transactions: Transaction[]): number => {
    let value = 0;
    transactions.forEach(transaction => {
        if (parseFloat(transaction.attributes.amount.value) < 0
            && dayjs(transaction.attributes.settledAt).isAfter(dayjs().subtract(30, 'days'))) {
            value += parseFloat(transaction.attributes.amount.value);
        }
    });
    return value;
};

export { }