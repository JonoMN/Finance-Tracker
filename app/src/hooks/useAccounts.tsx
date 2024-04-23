import { useState, useEffect } from 'react';
import { fetchAccounts } from '../services/accountServices';
import { Account } from '../types';

export const useAccounts = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetch = async () => {
            try {
                const fetchedAccounts = await fetchAccounts();
                setAccounts(fetchedAccounts);
            } catch (error) {
                setError('Failed to fetch accounts.');
            }
        };

        fetch();
    }, []);

    return { accounts, error };
};