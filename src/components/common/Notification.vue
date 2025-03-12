<script setup lang="ts">
import { ref } from 'vue'
import NotificationIcon from '../icons/NotificationIcon.vue'
import { notificationData } from '@/api/notificationData'

const openDropdown = ref<boolean>(false)
</script>

<template>
  <NotificationIcon
    color="#0B1C33"
    size="24"
    @click="openDropdown = !openDropdown"
    style="cursor: pointer"
  />

  <div v-show="openDropdown" class="dropdown">
    <ul>
      <li v-for="notification in notificationData" :key="notification.id">
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
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown ul li {
  padding: 8px 10px;
  cursor: pointer;
}

.dropdown ul li:hover {
  background-color: #f0f0f0;
}

.notification-message {
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
