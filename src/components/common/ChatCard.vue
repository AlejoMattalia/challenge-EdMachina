<script setup lang="ts">
import { colors } from '@/theme/Colors'
import type { ChatMessage } from '@/types/ChatInterface'

defineProps<{
  data: ChatMessage
}>()
</script>

<template>
  <section class="chat-card">
    <div class="image-container">
      <img :src="data.img" alt="User profile" />
      <span
        class="status-indicator"
        :class="{ online: data.connecting, offline: !data.connecting }"
      ></span>
    </div>

    <main class="chat-card-main">
      <div class="info-container">
        <p :style="{ color: colors.textColor }">{{ data.name }}</p>
        <p class="date">{{ data.date }}</p>
      </div>

      <div class="message-container">
        <p :title="data.message">{{ data.message }}</p>
      </div>
    </main>
  </section>
</template>

<style scoped>
.chat-card {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-right: 10px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  .image-container {
    position: relative;
    display: inline-block;
    top: 1px;

    img {
      height: 100%;
      border-radius: 8px;
    }
    .status-indicator {
      position: absolute;
      top: 0;
      right: 0;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid white;
    }

    .online {
      background-color: #27a468;
    }

    .offline {
      background-color: #e53761;
    }
  }

  .chat-card-main {
    width: 100%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;

    .info-container {
      display: flex;
      align-items: start;
      justify-content: space-between;
      width: 100%;
      font-size: 16px;

      .date {
        color: rgba(11, 28, 51, 0.7);
      }
    }

    .message-container {
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 500px;

      p {
        font-size: 14px;
        color: rgba(11, 28, 51, 0.7);
        display: inline-block;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
