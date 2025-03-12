<script setup lang="ts">
import { colors } from '@/theme/Colors'
import questionIcon from '../icons/QuestionIcon.vue'
import Button from '../common/Button.vue'
import SearchPage from '../common/SearchPage.vue'
import Notification from '../common/Notification.vue'
</script>

<template>
  <header :style="{ borderBottom: `1px solid ${colors.border}` }">
    <SearchPage />

    <div class="navbar-buttons">
      <questionIcon color="#0B1C33" size="24" style="cursor: pointer" />

      <Notification />

      <Button text="Add widget" bgColor="#3788E5" height="38px" :selected="true" />
    </div>
  </header>
</template>

<style scoped>
header {
  z-index: 300;
  padding-left: 320px;
  padding-right: 30px;
  position: fixed;
  width: 100%;
  height: 96px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbar-buttons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
