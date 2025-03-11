<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { themeOverrides } from './theme/ConfigTheme'
import Sidebar from '@/components/layout/Sidebar.vue'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <main class="main">
      <Navbar />
      <Sidebar />

      <div class="content">
        <router-view />
      </div>
    </main>
  </n-config-provider>
</template>

<style scoped>
.main {
  display: flex;
}

.content {
  margin-top: 96px;
  width: 100%;
}
</style>
