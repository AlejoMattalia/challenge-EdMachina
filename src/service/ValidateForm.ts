export const validateFormRegister = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  const errors: { [key: string]: string } = {}

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  if (!username.trim()) {
    errors.username = 'El nombre de usuario es obligatorio.'
  } else if (username.length < 4 || username.length > 20) {
    errors.username = 'El nombre de usuario debe tener entre 4 y 20 caracteres.'
  } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
    errors.username = 'El nombre de usuario solo puede contener letras y números.'
  }

  if (!email.trim()) {
    errors.email = 'El email es obligatorio.'
  } else if (!emailRegex.test(email)) {
    errors.email = 'El email no es válido.'
  }

  if (!password.trim()) {
    errors.password = 'La contraseña es obligatoria.'
  } else if (!passwordRegex.test(password)) {
    errors.password = 'Debe contener al menos 8 caracteres, una mayúscula, un número y un símbolo.'
  }

  if (!confirmPassword.trim()) {
    errors.confirmPassword = 'Debe confirmar la contraseña.'
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Las contraseñas no coinciden.'
  }

  return errors
}
