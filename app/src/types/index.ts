export interface Account {
    id: string;
    types: string;
    attributes: {
        displayName: string;
        accountType: string;
        ownershipType: string;
        balance: {
            currencyCode: string;
            value: string;
            valueInBaseUnits: number;
        };
        createdAt: string;
    };
}