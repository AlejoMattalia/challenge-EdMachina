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
  height: 100vh;
}

.content {
  margin-top: 96px;
  width: 100%;
  min-height: calc(100vh - 96px);
  background-color: #f2f5fa;
  padding: 20px;
  overflow-y: auto;
}
</style>
