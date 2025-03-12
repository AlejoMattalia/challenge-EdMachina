<script setup lang="ts">
import { colors } from '@/theme/Colors'
import SearchIcon from '../icons/SearchIcon.vue'
import { ref } from 'vue'

const viewInput = ref<boolean>(false)

defineProps<{
  searchForName: (name: string) => void
}>()
</script>

<template>
  <div class="search-container">
    <transition name="slide">
      <div v-if="viewInput">
        <input
          @input="searchForName(($event.target as HTMLInputElement).value)"
          type="text"
          placeholder="Search"
          :style="{ border: `1px solid ${colors.border}`, color: colors.textColor }"
        />
      </div>
    </transition>
  </div>

  <SearchIcon
    class="search-icon"
    color="#0B1C33"
    size="20"
    @click="viewInput = !viewInput"
    style="cursor: pointer"
  />
</template>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
  max-width: 180px;

  .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  input {
    width: 100%;
    height: 38px;
    border-radius: 10px;
    outline: none;
    background: none;
    box-shadow: none;
    padding-left: 15px;
    font-size: 16px;
    position: relative;
    left: 10px;
  }
}
</style>
