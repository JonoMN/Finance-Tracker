import { useState, useEffect } from 'react';
import { fetchTransactions } from '../services/transactionServices';
import { Transaction } from '../types';

export const useTransactions = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetch = async () => {
            try {
                const fetchedTransactions = await fetchTransactions();
                setTransactions(fetchedTransactions);
            } catch (error) {
                setError('Failed to fetch transactions.');
            }
        };

        fetch();
    }, []);

    return { transactions, error };
};