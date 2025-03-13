<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/common/Button.vue'
import { validateFormRegister } from '@/service/ValidateForm'
import bcrypt from 'bcryptjs'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
import Input from '@/components/common/Input.vue'
import InputPassword from '@/components/common/InputPassword.vue'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errors = ref<{ [key: string]: string }>({})

const router = useRouter()
const OnSubmit = async (e: Event) => {
  try {
    e.preventDefault()

    errors.value = validateFormRegister(
      username.value,
      email.value,
      password.value,
      confirmPassword.value,
    )

    if (Object.keys(errors.value).length !== 0) return

    //verificar si el email ya esta registrado
    const userRef = collection(db, 'user')

    // Verificar si el username ya está registrado
    const usernameQuery = query(userRef, where('username', '==', username.value))
    const usernameSnapshot = await getDocs(usernameQuery)

    if (!usernameSnapshot.empty) {
      errors.value.username = 'El nombre de usuario ya está registrado'
      return
    }

    // Verificar si el email ya está registrado
    const emailQuery = query(userRef, where('email', '==', email.value))
    const emailSnapshot = await getDocs(emailQuery)

    if (!emailSnapshot.empty) {
      errors.value.email = 'El email ya está registrado'
      return
    }

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password.value, salt)

    const formData = {
      username: username.value,
      email: email.value,
      password: hashedPassword,
    }

    //Enviar for a firebase
    await addDoc(collection(db, 'user'), formData)

    toast.success('Registro exitoso')

    //guardar en localstorage
    localStorage.setItem(
      'user',
      JSON.stringify({
        username: username.value,
        email: email.value,
      }),
    )

    username.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''

    //redireccionar al home con vue router
    router.push('/')
  } catch (error) {
    toast.error('Error al registrarte')
  }
}
</script>

<template>
  <section class="container-auth register">
    <h1 class="auth-title">REGISTRARSE</h1>

    <form class="form" @submit.prevent="OnSubmit">
      <Input
        text="Nombre de usuario"
        v-model="username"
        :errors="errors"
        id="username"
        errorField="username"
      />
      <Input text="Email" v-model="email" :errors="errors" id="email" errorField="email" />
      <InputPassword
        text="Contraseña"
        v-model="password"
        :errors="errors"
        id="password"
        errorField="password"
      />
      <InputPassword
        text="Repetir contraseña"
        v-model="confirmPassword"
        :errors="errors"
        id="confirmPassword"
        errorField="confirmPassword"
      />

      <Button
        text="Registrarse"
        bgColor="#3788E5"
        height="48px"
        width="100%"
        :selected="true"
        type="submit"
      />
    </form>

    <p class="register-link">
      ¿Ya tienes una cuenta? <router-link class="link" to="/login">Iniciar sesión</router-link>
    </p>
  </section>
</template>

<style scoped>
.register {
  .auth-title {
    color: rgba(11, 28, 51, 0.7);
    font-weight: normal;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 20px;
    margin-top: 50px;

    label {
      color: rgba(11, 28, 51, 0.7);
      font-size: 16px;
      font-weight: normal;
    }

    .input-auth {
      width: 100%;
      height: 47px;
      border-radius: 10px;
      outline: none;
      background: none;
      box-shadow: none;
      padding-left: 15px;
      font-size: 16px;
      border: 1px solid #dae3f8;
      margin-top: 10px;
      transition: border 0.2s ease-in-out;
    }

    /* Estilo cuando hay un error */
    .input-error {
      border: 1px solid #e53761 !important;
    }

    .error {
      display: flex;
      align-items: start;
      justify-content: start;
      color: #e53761;
      font-size: 12px;
      margin-top: 4px;
    }
  }

  .register-link {
    color: rgba(11, 28, 51, 0.7);
    font-weight: normal;
    font-size: 14px;
    margin-top: 30px;

    .link {
      color: #3788e5;
    }
  }
}
</style>
