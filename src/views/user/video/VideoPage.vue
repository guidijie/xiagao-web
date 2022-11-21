<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">
        <div ref="d1">
          <el-scrollbar :height="200">
            <div style="height: 900px">User</div>
          </el-scrollbar>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, onBeforeUnmount, getCurrentInstance } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { setHeight } from '@/utils/HeightUtils'

const activeName = ref('first')

const refs: any[] = reactive<HTMLElement[]>([])

onMounted(() => {
  getRefs()
})

onBeforeUnmount(() => {
  window.onresize = null
})

const getRefs = () => {
  if (!refs || refs.length < 1) {
    const current = getCurrentInstance()!.ctx.$refs
    for (const key in current) {
      refs.push(current[key])
    }
  }
  setHeight(refs, 160)
}

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
}
</script>
<style scoped></style>
