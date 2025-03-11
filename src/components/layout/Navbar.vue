<script setup lang="ts">
import { colors } from '@/theme/Colors'
import QuestionIcon from '../icons/QuestionIcon.vue'
import NotificationIcon from '../icons/NotificationIcon.vue'
import Button from '../common/Button.vue'
import DocumentationIcon from '../icons/DocumentationIcon.vue'
import Search from '../common/Search.vue'
</script>

<template>
  <header :style="{ borderBottom: `1px solid ${colors.border}` }">
    <Search />

    <div class="navbar-buttons">
      <QuestionIcon color="#0B1C33" size="24" />
      <NotificationIcon color="#0B1C33" size="24" />

      <Button text="Add widget" bgColor="#3788E5" height="38px" selected="true" />
    </div>
  </header>
</template>

<style scoped>
header {
  z-index: 100;
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
