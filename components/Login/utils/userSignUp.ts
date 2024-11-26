export default function userSignUp(e) {
  e.preventDefault()
  const formData = Object.fromEntries(new FormData(e.target))
  const userList = JSON.parse(localStorage.getItem('users'))

  if (userList === null) {
    localStorage.setItem('users', JSON.stringify([formData]))
    localStorage.setItem('auth', 'true')
    alert('Usuario creado, redirigiendo al homebanking')
    return true
  }
  if (userList.some((user) => user.email === formData.email)) {
    alert('El usuario ya existe, intente con otro email')
    return false
  }
  userList.push(formData)
  localStorage.setItem('users', JSON.stringify(userList))
  localStorage.setItem('auth', 'true')
  alert('Usuario creado, redirigiendo al homebanking')
  return true
}
