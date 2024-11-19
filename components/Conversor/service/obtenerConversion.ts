export async function obtenerConversion(monedaUno) {
  try {
    const data = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${monedaUno}`,
    )
    return await data.json()
  } catch (error) {
    console.error(error)
    return error
  }
}
