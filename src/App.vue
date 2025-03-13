<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { themeOverrides } from './theme/ConfigTheme'
import Sidebar from '@/components/layout/Sidebar.vue'
import Navbar from './components/layout/Navbar.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import 'vue3-toastify/dist/index.css'

const route = useRoute()
const isAuthLayout = computed(() => route.meta.layout === 'auth')
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <main class="main">
      <Navbar v-if="!isAuthLayout" />
      <Sidebar v-if="!isAuthLayout" />

      <div
        :class="isAuthLayout ? 'auth-layout' : 'content'"
        :style="!isAuthLayout ? { 'margin-top': '96px' } : {}"
      >
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
  width: 100%;
  min-height: calc(100vh - 96px);
  background-color: #f2f5fa;
  padding: 20px;
  overflow-y: auto;
}

.auth-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f5fa;

  .container-auth {
    background-color: #fff;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border: 1px solid #dae3f8;
    border-radius: 20px;
    width: 600px;
  }
}
</style>
