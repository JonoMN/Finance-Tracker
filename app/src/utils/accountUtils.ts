import { Account } from '../types';

export const calculateTotalBalance = (accounts: Account[]): number => {
    return accounts.reduce((sum, account) => sum + parseFloat(account.attributes.balance.value), 0);
};

export { }