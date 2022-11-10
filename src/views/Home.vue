<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0px; height: auto">
        <Header />
      </el-header>

      <el-main style="padding: 0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import { ref, reactive, onMounted } from 'vue'
</script>
<style scoped></style>
