export const datos = {
  fotoPerfil: 'https://randomuser.me/api/portraits/med/men/36.jpg',
  nombre: 'David Doe',
  saldoEnCuenta: 19000,
  tarjetas: [
    {
      type: 'Credito',
      cardNumber: '4111 1111 1111 1111',
      expirationDate: '12/25',
      cvv: '123',
      issuer: 'Visa',
      creditLimit: 500000,
      availableCredit: 250000,
      billingAddress: '123 Main St, Anytown, USA'
    },
    {
      type: 'Credito',
      cardNumber: '5555 5555 5555 5555',
      expirationDate: '06/24',
      cvv: '456',
      issuer: 'MasterCard',
      creditLimit: 800000,
      availableCredit: 600000,
      billingAddress: '456 Elm St, Otherville, USA'
    },
    {
      type: 'Debito',
      cardNumber: '6011 6011 6011 6011',
      expirationDate: '09/23',
      cvv: '789',
      issuer: 'Discover',
      accountBalance: 150000,
      linkedAccount: 'Savings Account',
      accountNumber: '1234567890'
    },
    {
      type: 'Debito',
      cardNumber: '4111 3411 3411 3411',
      expirationDate: '03/26',
      cvv: '234',
      issuer: 'American Express',
      accountBalance: 250000,
      linkedAccount: 'Checking Account',
      accountNumber: '9876543210'
    }
  ],
  facturas: [
    {
      id: '10001',
      payee: 'ABC Eléctrica',
      description: 'Factura de electricidad mensual',
      dueDate: '2023-10-15',
      amount: 3000.00
    },
    {
      id: '10002',
      payee: 'Compañía de Agua',
      description: 'Factura de agua trimestral',
      dueDate: '2023-09-28',
      amount: 1500.00
    },
    {
      id: '10003',
      payee: 'Gas Natural de la Ciudad',
      description: 'Servicio de gas natural',
      dueDate: '2023-10-05',
      amount: 2000.00
    },
    {
      id: '10004',
      payee: 'Proveedor de Internet',
      description: 'Suscripción mensual de internet',
      dueDate: '2023-09-30',
      amount: 2500.00
    },
    {
      id: '10005',
      payee: 'Compañía de Tarjetas de Crédito',
      description: 'Pago de tarjeta de crédito',
      dueDate: '2023-10-10',
      amount: 5000.00
    },
    {
      id: '10006',
      payee: 'Factura de Teléfono Inc.',
      description: 'Factura mensual de teléfono',
      dueDate: '2023-10-20',
      amount: 1000.00
    },
    {
      id: '10007',
      payee: 'Corporación de Préstamos de Autos',
      description: 'Cuota mensual de préstamo de auto',
      dueDate: '2023-10-25',
      amount: 8000.00
    },
    {
      id: '10008',
      payee: 'Compañía de Seguro de Salud',
      description: 'Prima mensual de seguro de salud',
      dueDate: '2023-10-08',
      amount: 3500.00
    },
    {
      id: '10009',
      payee: 'Gestión de Alquiler',
      description: 'Pago mensual de alquiler',
      dueDate: '2023-09-29',
      amount: 12000.00
    },
    {
      id: '10010',
      payee: 'Servicios de Préstamos Estudiantiles',
      description: 'Pago de préstamo estudiantil',
      dueDate: '2023-10-12',
      amount: 6000.00
    }
  ]

}
