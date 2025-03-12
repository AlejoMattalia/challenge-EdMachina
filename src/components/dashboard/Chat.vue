<script setup lang="ts">
import { colors } from '@/theme/Colors'
import { chatData } from '@/api/chatData'
import ChatCard from '../common/ChatCard.vue'
</script>

<template>
  <section class="chat" :style="{ border: `1px solid ${colors.border}` }">
    <header class="vaccination-header">
      <p>CHAT</p>
    </header>

    <div class="chat-container" v-for="chat in chatData" :key="chat.id">
      <ChatCard :data="chat" />
    </div>
  </section>
</template>

<style>
.chat {
  width: 620px;
  border: 1px solid red;
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;
  height: 378px;

  .vaccination-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    p {
      color: rgba(11, 28, 51, 0.7);
      font-size: 16px;
    }
  }

  .chat-container {
    margin-top: 20px;
  }
}
</style>
