<script setup lang="ts">
import { ref } from 'vue'
import NotificationIcon from '../icons/NotificationIcon.vue'
import type { Notification } from '@/types/NotificationInterface'
import { useFetch } from '@/composables/useFetch'
import Error from './Error.vue'

const openDropdown = ref<boolean>(false)

const { data, error, loading } = useFetch<Notification>('notification')
</script>

<template>
  <NotificationIcon
    color="#0B1C33"
    size="24"
    @click="openDropdown = !openDropdown"
    style="cursor: pointer"
  />
  <div v-show="openDropdown" class="dropdown">
    <div v-if="loading" class="container-loading">
      <n-spin size="large" />
    </div>
    <div v-else-if="error">
      <Error :error="error" />
    </div>
    <ul v-else>
      <li v-for="notification in data" :key="notification.id">
        <span class="notification-message">{{ notification.message }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: absolute;
  top: 70px;
  right: 90px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  padding: 10px;
  z-index: 1000;
  height: 138px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 8px 10px;
      cursor: pointer;

      &:hover {
        background-color: #f0f0f0;
      }

      .notification-message {
        display: block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .container-loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
