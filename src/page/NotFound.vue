<template>
  <div class="not-found-container">
    <h1 class="not-found-title">Page Not Found</h1>
    <p class="not-found-message">Sorry, we couldn't find the page you're looking for.</p>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  text-align: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  margin-top: 50px;
}

.not-found-title {
  font-size: 32px;
  font-weight: 600;
  color: #e53761; /* Rojo */
  margin-bottom: 10px;
}

.not-found-message {
  font-size: 16px;
  color: #333;
}
</style>
