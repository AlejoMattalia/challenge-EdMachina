<script setup lang="ts">
import Button from '@/components/common/Button.vue'
import Input from '@/components/common/Input.vue'
import InputPassword from '@/components/common/InputPassword.vue'
import { db } from '@/firebaseConfig'
import { validateEmail, validatePassword } from '@/service/ValidateForm'
import bcrypt from 'bcryptjs'
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errors = ref<{ [key: string]: string }>({})
const recoverPassword = ref(false)
const router = useRouter()
const userRef = collection(db, 'user')

const OnSubmitEmail = async (e: Event) => {
  try {
    e.preventDefault()
    errors.value = validateEmail(email.value)

    if (Object.keys(errors.value).length !== 0) return

    // Verificar si el email ya esta registrado
    const emailQuery = query(userRef, where('email', '==', email.value))
    const emailSnapshot = await getDocs(emailQuery)

    //si el email no existe enviar error
    if (emailSnapshot.empty) {
      errors.value.email = 'El email no esta registrado'
      return
    }

    recoverPassword.value = true
  } catch (error) {
    toast.error('Error al obtener el email')
  }
}

const OnSubmitPassword = async (e: Event) => {
  try {
    e.preventDefault()

    errors.value = validatePassword(password.value, confirmPassword.value)
    if (Object.keys(errors.value).length !== 0) return

    // Obtener usuario a través del email
    const emailQuery = query(userRef, where('email', '==', email.value))
    const emailSnapshot = await getDocs(emailQuery)
    const userId = emailSnapshot.docs[0].id

    // Actualizar la contraseña
    const newPassword = await bcrypt.hash(password.value, 10)
    const individualUser = doc(db, 'user', userId)
    await updateDoc(individualUser, {
      password: newPassword,
    })

    toast.success('Contraseña actualizada correctamente')

    //tardar dos segundos para redirigir
    setTimeout(() => {
      router.push('/login')
    }, 2500)
  } catch (error) {
    console.error(error)
    toast.error('Error al actualizar la contraseña')
  }
}
</script>

<template>
  <section class="container-auth forgot-password">
    <h1 class="auth-title">RECUPERAR CONTRASEÑA</h1>

    <form v-if="!recoverPassword" class="form" @submit.prevent="OnSubmitEmail">
      <Input text="Email" v-model="email" :errors="errors" id="email" errorField="email" />
      <Button
        text="Siguiente"
        bgColor="#3788E5"
        height="48px"
        width="100%"
        :selected="true"
        type="submit"
      />
    </form>
    <form v-else-if="recoverPassword" class="form" @submit.prevent="OnSubmitPassword">
      <InputPassword
        text="Contraseña"
        v-model="password"
        :errors="errors"
        id="password"
        errorField="password"
      />

      <InputPassword
        text="Repetir contraseña"
        v-model="confirmPassword"
        :errors="errors"
        id="confirmPassword"
        errorField="confirmPassword"
      />

      <Button
        text="Cambiar contraseña"
        bgColor="#3788E5"
        height="48px"
        width="100%"
        :selected="true"
        type="submit"
      />
    </form>
  </section>
</template>

<style scoped>
.forgot-password {
  .auth-title {
    color: rgba(11, 28, 51, 0.7);
    font-weight: normal;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 20px;
    margin-top: 30px;

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
}
</style>
