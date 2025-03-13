<script setup lang="ts">
import { ref, watch } from 'vue'

defineProps<{
  text: string
  errors: Record<string, any>
  id: string
  errorField: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const modelValue = ref('')

watch(modelValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <div>
    <label :for="id">{{ text }}</label>
    <input
      :id="id"
      type="text"
      class="input-auth"
      v-model="modelValue"
      :class="{ 'input-error': errors?.[errorField] }"
    />
    <p v-if="errors?.[errorField]" class="error">{{ errors[errorField] }}</p>
  </div>
</template>

<style scoped>
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
</style>
