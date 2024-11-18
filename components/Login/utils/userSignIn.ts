export default function userSignIn(e) {
  e.preventDefault()

  const { email, password } = Object.fromEntries(new FormData(e.target))
  const userList = JSON.parse(localStorage.getItem('users'))

  if (
    userList === null ||
    !userList.some((user) => user.email === email && user.password === password)
  ) {
    alert(
      'No existe el usuario, cree un usuario para continuar o verifique que todos los campos sean correctos',
    )
    return false
  }
  localStorage.setItem('auth', true)
  alert('Logueado, redirigiendo al homebanking')
  return true
}
