<script setup lang="ts">
import { ref, computed } from 'vue'
import { colors } from '@/theme/Colors'
import SearchIcon from '../icons/SearchIcon.vue'
import RedirectIcon from '../icons/RedirectIcon.vue'
import { pages } from '@/api/pagesData'
import type { Page } from '@/types/pageInterface'
import { RouterLink } from 'vue-router'

const searchQuery = ref<string>('')

const filteredPages = computed<Page[]>(() => {
  return pages.filter((page) => page.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})
</script>

<template>
  <div class="search-container">
    <SearchIcon class="search-icon" color="#0B1C33" size="20" />
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search"
      :style="{ border: `1px solid ${colors.border}`, color: colors.textColor }"
    />

    <!-- Resultados dinámicos basados en la búsqueda -->
    <div v-if="searchQuery" class="search-results">
      <div v-for="page in filteredPages" :key="page.id">
        <router-link :to="page.path" :style="{ textDecoration: 'none' }" @click="searchQuery = ''">
          <div class="result-item"><RedirectIcon color="#0B1C33" size="20" /> {{ page.name }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
  max-width: 800px;

  .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  input {
    width: 100%;
    height: 47px;
    border-radius: 10px;
    outline: none;
    background: none;
    box-shadow: none;
    padding-left: 45px;
    font-size: 16px;
  }

  .search-results {
    position: absolute;
    width: 100%;
    background: white;
    border: 1px solid #dae3f8;
    border-radius: 10px;
    margin-top: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 500;

    .result-item {
      padding: 10px;
      border-bottom: 1px solid #dae3f8;
      cursor: pointer;
      color: #0b1c33;
      display: flex;
      align-items: center;
      gap: 10px;
      position: relative;
      z-index: 500;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}
</style>
