const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const validateFormRegister = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  const errors: { [key: string]: string } = {}

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
    errors.email = 'Formato de email no valido.'
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

export const validateEmail = (email: string) => {
  const errors: { [key: string]: string } = {}

  if (!email.trim()) {
    errors.email = 'El email es obligatorio.'
  } else if (!emailRegex.test(email)) {
    errors.email = 'Formato de email no valido.'
  }

  return errors
}

export const validatePassword = (password: string, confirmPassword: string) => {
  const errors: { [key: string]: string } = {}

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
