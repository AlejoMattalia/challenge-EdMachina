<script setup lang="ts">
import { colors } from '@/theme/Colors'
import ChatCard from '../common/ChatCard.vue'
import { useFetch } from '@/composables/useFetch'
import type { ChatMessage } from '@/types/ChatInterface'
import Error from '../common/Error.vue'

const { data, error, loading } = useFetch<ChatMessage>('chat')
</script>

<template>
  <n-skeleton v-if="loading" height="378px" width="620px" :sharp="false" />
  <section v-else class="chat" :style="{ border: `1px solid ${colors.border}` }">
    <header class="vaccination-header">
      <p>CHAT</p>
    </header>

    <div v-if="error">
      <Error :error="error" />
    </div>
    <div v-else class="chat-container" v-for="chat in data" :key="chat.id">
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
