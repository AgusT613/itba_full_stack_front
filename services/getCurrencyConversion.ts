export async function getCurrencyConversion(currency) {
  try {
    const data = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${currency}`,
    )
    return await data.json()
  } catch (error) {
    console.error(error)
    return error
  }
}
