import { Transaction } from "../types"
import dayjs from 'dayjs';

export const calculateProfitLoss = (transactions: Transaction[]): number => {
    let value = 0;
    transactions.forEach(transaction => {
        if (dayjs(transaction.attributes.settledAt).isBefore(dayjs())
            && dayjs(transaction.attributes.settledAt).isAfter(dayjs().subtract(30, 'days'))) {
            value += parseFloat(transaction.attributes.amount.value);
        }
    });
    return value;
};

export { }