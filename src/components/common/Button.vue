<script setup>
import counter from './Counter.vue'
import persons from '@/assets/img/persons.png'

defineProps({
  text: {
    type: String,
    required: true,
  },
  redirect: {
    type: String,
    default: null, // Ahora es opcional
  },
  bgColor: {
    type: String,
    default: 'primary',
  },
  selected: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '40px',
  },
  icon: {
    type: Object,
    default: null, // Ahora es opcional
  },
  iconColor: {
    type: String,
    default: '#3788E5',
  },
  iconSize: {
    type: [String, Number],
    default: 24,
  },
  counterView: {
    type: Boolean,
    default: false,
  },
  imageView: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <component
    :is="redirect ? 'RouterLink' : 'none'"
    v-bind="redirect ? { to: redirect, style: { textDecoration: 'none' } } : {}"
    :style="{ textDecoration: 'none' }"
  >
    <button
      :style="{
        width: width,
        height: height,
        borderRadius: '14px',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        border: 'none',
        paddingLeft: '25px',
        paddingRight: '25px',
        backgroundColor: selected ? bgColor : 'transparent',
        color: selected ? '#fff' : 'rgba(11, 28, 51, 0.7)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }"
    >
      <component
        v-if="icon"
        :is="icon"
        :color="iconColor"
        :size="iconSize"
        :style="{ marginRight: '8px', transition: 'all 0.3s ease' }"
      />

      {{ text }}

      <div :style="{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }">
        <counter v-if="counterView" :count="2" />
        <img v-if="imageView" :src="persons" alt="" />
      </div>
    </button>
  </component>
</template>

<style scoped>
button {
  outline: none;
}

button:hover {
  background-color: rgba(55, 136, 229, 0.2);
  transform: scale(1.05);
}

button:active {
  transform: scale(0.98);
}
</style>
