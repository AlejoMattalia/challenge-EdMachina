<script setup lang="ts">
import Button from '@/components/common/Button.vue'
import { db } from '@/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import bcrypt from 'bcryptjs'
import { toast } from 'vue3-toastify'
import Input from '@/components/common/Input.vue'
import InputPassword from '@/components/common/InputPassword.vue'

const usernameOrEmail = ref('')
const password = ref('')
const errors = ref<{ [key: string]: string }>({})

const router = useRouter()

const OnSubmit = async (e: Event) => {
  try {
    e.preventDefault()
    errors.value = {} // Limpiar errores anteriores

    if (!usernameOrEmail.value) {
      errors.value.username = 'El nombre de usuario o email es obligatorio'
      return
    }
    if (!password.value) {
      errors.value.password = 'La contraseña es obligatoria'
      return
    }

    const userRef = collection(db, 'user')

    // Consultar por username
    const q1 = query(userRef, where('username', '==', usernameOrEmail.value))
    const snapshot1 = await getDocs(q1)

    // Consultar por email
    const q2 = query(userRef, where('email', '==', usernameOrEmail.value))
    const snapshot2 = await getDocs(q2)

    let userDoc = snapshot1.docs[0] || snapshot2.docs[0]

    if (!userDoc) {
      errors.value.username = 'El usuario o email no está registrado'
      return
    }

    // Verificar contraseña
    const userData = userDoc.data()
    const passwordMatch = await bcrypt.compare(password.value, userData.password)

    if (!passwordMatch) {
      errors.value.password = 'La contraseña es incorrecta'
      return
    }

    if (!userData) return toast('Error al iniciar sesión')

    localStorage.setItem(
      'user',
      JSON.stringify({
        username: userData.username,
        email: userData.email,
      }),
    )

    setTimeout(() => {
      router.push('/')
    }, 2500)
  } catch (error) {
    console.log(error)
    errors.value.general = 'Ocurrió un error, intenta nuevamente'
  }
}
</script>

<template>
  <section class="container-auth login">
    <h1 class="auth-title">INICIAR SESIÓN</h1>

    <form class="form" @submit.prevent="OnSubmit">
      <Input
        text="Nombre de usuario o email"
        v-model="usernameOrEmail"
        :errors="errors"
        id="usernameOrEmail"
        errorField="username"
      />
      <InputPassword
        text="Contraseña"
        v-model="password"
        :errors="errors"
        id="password"
        errorField="password"
      />

      <Button
        text="Iniciar sesión"
        bgColor="#3788E5"
        height="48px"
        width="100%"
        :selected="true"
        type="submit"
      />
    </form>

    <router-link to="/forgot-password" :style="{ textDecoration: 'none' }">
      <p class="forgot-password">¿Olvidaste tu contraseña?</p>
    </router-link>

    <p class="login-link">
      ¿No tenés una cuenta? <router-link class="link" to="/register">Registrarse</router-link>
    </p>
  </section>
</template>

<style scoped>
.login {
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

  .forgot-password {
    color: rgba(11, 28, 51, 0.7);
    font-weight: normal;
    font-size: 14px;
    margin-top: 30px;
    cursor: pointer;

    &:hover {
      color: #3788e5;
      text-decoration: underline;
    }
  }

  .login-link {
    color: rgba(11, 28, 51, 0.7);
    font-weight: normal;
    font-size: 14px;
    margin-top: 10px;

    .link {
      color: #3788e5;
    }
  }
}
</style>
