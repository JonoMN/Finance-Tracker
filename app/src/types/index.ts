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
        }
        createdAt: string;
    }
}

export interface Transaction {
    id: string;
    types: string;
    attributes: {
        status: string;
        rawText: string;
        description: string;
        message: string;
        isCategorizable: string;
        holdInfo: string;
        roundUp: string;
        cashBack: string;
        amount: {
            currencyCode: string;
            value: string;
            valueInBaseUnits: number;
        }
        foreignAmount: string;
        cardPurchaseMethod: string;
        settledAt: string;
        createdAt: string;
    }
    relationships: {
        category: {
            data: {
                type: string;
                id: string;
            }
        }
    }
}