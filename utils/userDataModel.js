export const USER = {
    customer: {
        id: 0,
        name: "Lucas",
        lastName: "Gonzalez",
        dni: 47806975,
        age: 26,
        balance: 1000,
        img: "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
    },
    accounts: [
        {
            number: "1800 1555 6301 0114",
            balance: 500000,
            type: "gold",
            currency: "pesos"
        },
        {
            number: "1556 4477 2387 4777",
            balance: 1000,
            type: "black",
            currency: "dollar"
        }
    ],
    cards: [
        {
            id: 0,
            number: "1600 0000 4444 8888",
            cvv: 430,
            grandDate: "15/10/19",
            expirationDate: "15/10/25",
            type: "credit",
            brand: "mastercard"
        },
        {
            id: 1,
            number: "1747 1020 1325 7777",
            cvv: 478,
            grandDate: "15/10/19",
            expirationDate: "15/10/25",
            type: "debit",
            brand: "visa"
        }
    ],
    paymentRecords: [
        {
            id: "asfasf1531a56f16a",
            service: "EDESUR",
            amount: 500,
            paymentDate: "17/03/2022"
        },
    ],
    activity: [
        {
            accountNumber: "1800 1555 6301 0114",
            amount: 10000,
            operationType: "transfer",
            date: "17/12/24"
        }
    ],
    billPayment: [
        {
            id: 0,
            recipient: "EDESUR",
            description: "Pago de tarifa de luz",
            expirationDate: "20/05/25",
            amount: 5000
        }
    ],
    loan: [
        {
            id: 0,
            branchOffice: "ITBANK",
            type: "hipotecario",
            grandDate: "10/12/24",
            expirationDate: "10/12/26",
            amount: 500000
        },
        {
            id: 1,
            branchOffice: "Alises",
            type: "personal",
            grandDate: "10/12/24",
            expirationDate: "10/12/26",
            amount: 100000
        },
        {
            id: 2,
            branchOffice: "Alises",
            type: "prendario",
            grandDate: "10/12/24",
            expirationDate: "10/12/26",
            amount: 120000
        }
    ]
}

export const BRANCH_OFFICE = [
    {
        id: 0,
        name: "ITBANK",
        address: "Cochabanba 1078",
        contactNumber: "1178205514"
    },
    {
        id: 1,
        name: "Andes",
        address: "Maril 1078",
        contactNumber: "1377207714"
    }
]