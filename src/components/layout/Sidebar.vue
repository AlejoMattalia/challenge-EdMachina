<script setup>
import { colors } from '@/theme/Colors'
import PetIcon from '@/components/icons/PetIcon.vue'
import DashboardIcon from '../icons/DashboardIcon.vue'
import FootIcon from '../icons/FootIcon.vue'
import Button from '@/components/common/Button.vue'
import { useRoute } from 'vue-router'
import HealthMonitoringIcon from '../icons/healthMonitoringIcon.vue'
import VaccinationScheduleIcon from '../icons/VaccinationScheduleIcon.vue'
import ChatIcon from '../icons/ChatIcon.vue'
import CalendarIcon from '../icons/CalendarIcon.vue'
import SettingIcon from '../icons/SettingIcon.vue'
import DocumentationIcon from '../icons/DocumentationIcon.vue'
import LogOutIcon from '../icons/LogOutIcon.vue'

// Obtener el valor de la ruta actual
const route = useRoute()
</script>

<template>
  <aside class="sidebar" :style="{ borderRight: `1px solid ${colors.border}` }">
    <header class="sidebar-header">
      <pet-icon color="#3788E5" size="24" />
      <h1 :style="{ color: colors.textColor }">PetCare</h1>
    </header>

    <main class="sidebar-main">
      <p>MENU</p>

      <div class="sidebar-buttons">
        <Button
          text="Dashboard"
          redirect="/dashboard"
          bgColor="#3788E5"
          :selected="route.path === '/dashboard'"
          width="100%"
          height="48px"
          :icon="DashboardIcon"
          :iconColor="route.path === '/dashboard' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
        />

        <Button
          text="Pet Profile"
          redirect="/pet-profile"
          bgColor="#3788E5"
          :selected="route.path === '/pet-profile'"
          width="100%"
          height="48px"
          :icon="FootIcon"
          :iconColor="route.path === '/pet-profile' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
        />
      </div>
      <div
        :style="{ marginTop: '20px', marginBottom: '30px', border: `0.5px solid ${colors.border}` }"
      ></div>

      <p>ANALYTICS</p>
      <div class="sidebar-buttons">
        <Button
          text="Health monitoring"
          redirect="/health-monitoring"
          bgColor="#3788E5"
          :selected="route.path === '/health-monitoring'"
          width="100%"
          height="48px"
          :icon="HealthMonitoringIcon"
          :iconColor="route.path === '/health-monitoring' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
        />

        <Button
          text="Vaccination shedule"
          redirect="/vaccination-schedule"
          bgColor="#3788E5"
          :selected="route.path === '/vaccination-schedule'"
          width="100%"
          height="48px"
          :icon="VaccinationScheduleIcon"
          :iconColor="route.path === '/vaccination-schedule' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
        />
      </div>

      <div
        :style="{ marginTop: '20px', marginBottom: '30px', border: `0.5px solid ${colors.border}` }"
      ></div>

      <p>SCHEDULE</p>
      <div class="sidebar-buttons">
        <Button
          text="Chat"
          redirect="/chat"
          bgColor="#3788E5"
          :selected="route.path === '/chat'"
          width="100%"
          height="48px"
          :icon="ChatIcon"
          :iconColor="route.path === '/chat' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
          :imageView="true"
        />

        <Button
          text="Appointments"
          redirect="/appointments"
          bgColor="#3788E5"
          :selected="route.path === '/appointments'"
          width="100%"
          height="48px"
          :icon="CalendarIcon"
          :iconColor="route.path === '/appointments' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
          :counterView="true"
        />
      </div>

      <div
        :style="{ marginTop: '20px', marginBottom: '30px', border: `0.5px solid ${colors.border}` }"
      ></div>

      <p>HELP</p>
      <div class="sidebar-buttons">
        <Button
          text="Settings"
          redirect="/settings"
          bgColor="#3788E5"
          :selected="route.path === '/settings'"
          width="100%"
          height="48px"
          :icon="SettingIcon"
          :iconColor="route.path === '/settings' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
        />

        <Button
          text="Documentation"
          redirect="/documentation"
          bgColor="#3788E5"
          :selected="route.path === '/documentation'"
          width="100%"
          height="48px"
          :icon="DocumentationIcon"
          :iconColor="route.path === '/documentation' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
        />
      </div>
    </main>

    <button class="logout-button">
      <LogOutIcon color="#E53761" size="24" />
      Log out
    </button>
  </aside>
</template>

<style>
.sidebar {
  min-width: 288px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 24px;
  padding-top: 35px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 200;
  position: relative;
  background-color: #fff;

  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    left: 30px;

    h1 {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .sidebar-main {
    margin-top: 40px;
    width: 100%;
    p {
      font-size: 18px;
      position: relative;
      left: 30px;
      color: rgba(11, 28, 51, 0.7);
      margin-bottom: 12px;
    }

    .sidebar-buttons {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
}

.logout-button {
  height: 48px;
  background-color: transparent;
  border: none;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  color: #e53761;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  position: relative;
  left: 28px;
  margin-top: 60px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
