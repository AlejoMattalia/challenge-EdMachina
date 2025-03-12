<script setup lang="ts">
import { colors } from '@/theme/Colors'
import type { ChatMessage } from '@/types/ChatInterface'
import { ref } from 'vue'
import Counter from './Counter.vue'

defineProps<{
  data: ChatMessage
}>()

const showModal = ref<boolean>(false)
</script>

<template>
  <section class="chat-card" @click="showModal = true">
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

    <div class="counter-container">
      <Counter v-if="data.unansweredMessage > 0" :count="data.unansweredMessage" />
    </div>
  </section>

  <n-modal v-model:show="showModal">
    <n-card style="width: 600px" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <template #header>
        <div class="modal-header">
          <div class="modal-info">
            <img :src="data.img" alt="User profile" class="modal-img" />
            <span class="modal-name">{{ data.name }}</span>
          </div>
          <p class="date">{{ data.date }}</p>
        </div>
      </template>

      <p class="modal-message">
        {{ data.message }}
      </p>
    </n-card>
  </n-modal>
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
  position: relative;

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
      width: 430px;

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
  .counter-container {
    position: absolute;
    right: 8px;
    bottom: 3px;
  }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .modal-info {
    display: flex;
    align-items: center;
    gap: 10px;

    .modal-img {
      width: 50px;
      height: 50px;
      border-radius: 8px;
    }

    .modal-name {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  .date {
    color: rgba(11, 28, 51, 0.7);
  }
}

.modal-message {
  font-size: 16px;
  position: relative;
  bottom: 10px;
  color: rgba(11, 28, 51, 0.7);
}
</style>
