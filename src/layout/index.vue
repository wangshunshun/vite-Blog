<template>
  <div class="layout-wrapper">
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Navbar from './app-main/navbar.vue'
import AppMain from './app-main/index.vue'
</script>
<style lang="scss" scoped>
 .main-container {
  min-height: 100%;
 }
</style>