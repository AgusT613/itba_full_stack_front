export default function Page ({ params }) {
  const cuenta = params.cuentasId

  return (
    <>
      <h2>Cuenta ID {cuenta}</h2>
    </>
  )
}
