import { Account, Transaction } from '../types';


const mockAccounts: Account[] = [
    {
        id: '1',
        types: "accounts",
        attributes: {
            displayName: 'Spending',
            accountType: 'TRANSACTIONAL',
            ownershipType: 'INDIVIDUAL',
            balance: {
                currencyCode: 'AUD',
                value: '1000.00',
                valueInBaseUnits: 100000,
            },
            createdAt: '2024-01-01T00:00:00Z',
        },
    },
    {
        id: '2',
        types: 'bankAccount',
        attributes: {
            displayName: '🌧️ Rainy Day',
            accountType: 'SAVER',
            ownershipType: 'INDIVIDUAL',
            balance: {
                currencyCode: 'AUD',
                value: '3000.00',
                valueInBaseUnits: 300000,
            },
            createdAt: '2023-06-15T00:00:00Z',
        },
    },
    {
        id: '2',
        types: 'bankAccount',
        attributes: {
            displayName: '🏖️ Holiday',
            accountType: 'SAVER',
            ownershipType: 'INDIVIDUAL',
            balance: {
                currencyCode: 'AUD',
                value: '750.00',
                valueInBaseUnits: 75000,
            },
            createdAt: '2023-06-15T00:00:00Z',
        },
    },
    {
        id: '2',
        types: 'bankAccount',
        attributes: {
            displayName: '🚗 New Car',
            accountType: 'SAVER',
            ownershipType: 'INDIVIDUAL',
            balance: {
                currencyCode: 'AUD',
                value: '890.00',
                valueInBaseUnits: 89000,
            },
            createdAt: '2023-06-15T00:00:00Z',
        },
    },
    {
        id: '2',
        types: 'bankAccount',
        attributes: {
            displayName: '🏠 Home Loan',
            accountType: 'SAVER',
            ownershipType: 'INDIVIDUAL',
            balance: {
                currencyCode: 'AUD',
                value: '12000.00',
                valueInBaseUnits: 1200000,
            },
            createdAt: '2023-06-15T00:00:00Z',
        },
    },
];

const mockTransactions: Transaction[] = [
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Translink',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-7.59',
                valueInBaseUnits: -759,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-05-29T03:22:45+10:00',
            createdAt: '2024-05-29T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'public transport',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Salary',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '850',
                valueInBaseUnits: 850,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-05-27T03:22:45+10:00',
            createdAt: '2024-05-27T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'salary',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Anytime Fitness',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-24.99',
                valueInBaseUnits: -2499,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-05-20T03:22:45+10:00',
            createdAt: '2024-05-20T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'fitness and wellbeing',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: 'EG GROUP 2002, BOWEN HILLS',
            description: 'EG Ampol',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-50.00',
                valueInBaseUnits: -5000,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-05-14T03:22:45+10:00',
            createdAt: '2024-05-13T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'fuel',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Woolworths',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-89.00',
                valueInBaseUnits: -8900,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-05-14T03:22:45+10:00',
            createdAt: '2024-05-02T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'groceries',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Coles',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-27.00',
                valueInBaseUnits: -2700,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-05-14T03:22:45+10:00',
            createdAt: '2024-05-14T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'groceries',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Translink',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-3.50',
                valueInBaseUnits: -350,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-05-14T03:22:45+10:00',
            createdAt: '2024-05-14T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'public transport',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Microsoft',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-3.00',
                valueInBaseUnits: -300,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-05-10T03:22:45+10:00',
            createdAt: '2024-05-10T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'games and software',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Empire Hotel',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-22.00',
                valueInBaseUnits: -2200,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-05-12T03:22:45+10:00',
            createdAt: '2024-05-12T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'pubs and bars',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Uber',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-17.00',
                valueInBaseUnits: -1700,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-05-03T03:22:45+10:00',
            createdAt: '2024-05-03T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'fuel',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Anytime Fitness',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-24.99',
                valueInBaseUnits: -2499,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-04-30T03:22:45+10:00',
            createdAt: '2024-04-30T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'fitness and wellbeing',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Translink',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-7.59',
                valueInBaseUnits: -759,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-04-25T03:22:45+10:00',
            createdAt: '2024-04-25T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'public transport',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Empire Hotel',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-22.00',
                valueInBaseUnits: -2200,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-04-26T03:22:45+10:00',
            createdAt: '2024-04-26T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'pubs and bars',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Microsoft',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-3.00',
                valueInBaseUnits: -300,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-04-19T03:22:45+10:00',
            createdAt: '2024-04-19T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'games and software',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: 'EG GROUP 2002, BOWEN HILLS',
            description: 'EG Ampol',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-50.00',
                valueInBaseUnits: -5000,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-04-04T03:22:45+10:00',
            createdAt: '2024-04-04T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'fuel',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Woolworths',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-89.00',
                valueInBaseUnits: -8900,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-04-12T03:22:45+10:00',
            createdAt: '2024-04-12T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'groceries',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Babylon Barber',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-47.00',
                valueInBaseUnits: -4700,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-04-07T03:22:45+10:00',
            createdAt: '2024-04-07T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'hair & beauty',
                },
            },
        },
    },
    {
        id: '101',
        types: 'transaction',
        attributes: {
            status: 'SETTLED',
            rawText: '',
            description: 'Uber',
            message: '',
            isCategorizable: 'true',
            holdInfo: '',
            roundUp: '',
            cashBack: '',
            amount: {
                currencyCode: 'AUD',
                value: '-17.00',
                valueInBaseUnits: -1700,
            },
            foreignAmount: '',
            cardPurchaseMethod: 'chip',
            settledAt: '2024-04-08T03:22:45+10:00',
            createdAt: '2024-04-08T21:27:01+10:00',
        },
        relationships: {
            category: {
                data: {
                    type: 'categories',
                    id: 'fuel',
                },
            },
        },
    },
];

export { mockAccounts, mockTransactions };