import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('*/api/itbank/branch-offices', () => {
    return HttpResponse.json([
      {
        id: 1,
        branch_name: 'Sucursal Central',
        address: 'Av. Corrientes 1234',
        phone: '11-4567-8900',
        opening_hours: '10:00 - 15:00',
      },
    ])
  }),

  http.get('*/api/homebanking/', () => {
    return HttpResponse.json({
      user: {
        id: 1,
        first_name: 'Agustin',
        last_name: 'Test',
        email: 'test@itbank.com',
        username: 'agustin_test',
        profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      cards: [],
      itbank_account: {
        id: 1,
        account_number: '1234567890',
        alias: 'TEST.ALIAS.ITBANK',
        balance: 150000,
        account_type: 'Caja de Ahorro en Pesos',
        description: '0170099920000012345678',
      },
      transfers: [],
    })
  }),

  http.post('*/api/homebanking/deposit', async ({ request }) => {
    const body = (await request.json()) as { alias?: string; amount?: number }
    if (!body.alias || !body.amount) {
      return HttpResponse.json(
        { detail: 'Campos requeridos faltantes' },
        { status: 400 },
      )
    }
    return HttpResponse.json({
      message: 'Depósito procesado con éxito',
      new_balance: 150000 + body.amount,
    })
  }),
]
