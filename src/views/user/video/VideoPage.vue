<template>
  <div class="bg-box">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">
        <el-scrollbar :height="domHeight">
          <div style="height: 900px">User</div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { getOffsetHeight } from '@/utils/domHeight'

const activeName = ref('first')
let domHeight = ref(0)
onMounted(() => {
  domHeight.value = getOffsetHeight()
  console.log(domHeight.value)
})

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style scoped></style>
