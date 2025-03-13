<script setup lang="ts">
import { ref, watch } from 'vue'
import EyeIcon from '../icons/EyeIcon.vue'
import ClosedEyeIcon from '../icons/ClosedEyeIcon.vue'

defineProps<{
  text: string
  errors: Record<string, any>
  id: string
  errorField: string // Nuevo prop para el campo de error
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const modelValue = ref('')

watch(modelValue, (newValue) => {
  emit('update:modelValue', newValue)
})

const viewPassword = ref(false)

const togglePasswordVisibility = () => {
  viewPassword.value = !viewPassword.value
}
</script>

<template>
  <div class="input-container">
    <label :for="id">{{ text }}</label>
    <div class="input-wrapper">
      <input
        :id="id"
        :type="viewPassword ? 'text' : 'password'"
        class="input-auth"
        v-model="modelValue"
        :class="{ 'input-error': errors?.[errorField] }"
      />
      <div class="eye-icon" @click="togglePasswordVisibility">
        <EyeIcon v-if="viewPassword" color="rgba(11, 28, 51, 0.7)" size="24" />
        <ClosedEyeIcon v-else color="rgba(11, 28, 51, 0.7)" size="24" />
      </div>
    </div>
    <p v-if="errors?.[errorField]" class="error">{{ errors[errorField] }}</p>
  </div>
</template>

<style scoped>
label {
  color: rgba(11, 28, 51, 0.7);
  font-size: 16px;
  font-weight: normal;
}

.input-container {
  position: relative;
}

.input-wrapper {
  position: relative;
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
  padding-right: 40px; /* Para dejar espacio para el ícono */
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

/* Estilo del contenedor del ícono */
.eye-icon {
  position: absolute;
  top: 37px;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
