<template>
  <div class="top_bar" :class="navBarFixed == true ? 'navBarWrap' : ''">
    <el-row>
      <!-- 导航栏左侧 -->
      <el-col :span="4">
        <el-row>
          <!-- 菜单按钮 -->
          <el-col :span="3" style="margin-left: 5%" class="cursor">
            <el-icon :size="30" @click="sideMenuShow = !sideMenuShow"><Operation /></el-icon>
          </el-col>
          <!-- logo -->
          <el-col :span="3" style="margin-left: 3%" class="cursor">
            <div class="logo-font" @click="toHome()">XiaGao</div>
          </el-col>
        </el-row>
      </el-col>
      <!-- 导航栏中间搜索按钮 -->
      <el-col :span="16">
        <el-input v-model="searchValue" style="max-width: 550px" size="large" placeholder="Please Input">
          <template #suffix>
            <el-button class="search-button">
              <el-icon :size="22">
                <Search />
              </el-icon>
            </el-button>
          </template>
        </el-input>
      </el-col>

      <!-- 导航栏右侧 -->
      <el-col :span="4">
        <el-row>
          <el-col :span="4">
            <el-icon :size="30"><ChatLineSquare class="cursor" /></el-icon>
          </el-col>
          <el-col :span="4">
            <el-icon :size="30"><Bell class="cursor" /></el-icon>
          </el-col>
          <!-- 头像下拉 -->
          <el-col :span="8">
            <el-dropdown ref="dropdown" trigger="contextmenu" placement="bottom-end" popper-class="my-dropdown">
              <div style="margin: auto" class="cursor"><el-avatar :size="50" :src="state.circleUrl" @click="dropdownClick()" /></div>
              <template #dropdown>
                <div class="dropdown-menu">
                  <span @click="toUserInfo">个人中心</span>
                </div>
              </template>
            </el-dropdown>
          </el-col>
          <!-- 上传按钮 -->
          <el-col :span="8">
            <el-button color="#272626" style="max-width: 120px" round>上传视频</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
  <div class="header" :style="checkPath() ? 'display: none' : ''">菜单</div>

  <transition name="side-menu">
    <div v-if="sideMenuShow" class="x_side_menu">
      <!-- <div style="width: 100%; height: 1200px; background-color: red"></div> -->
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 搜索框的值
const searchValue = ref('')

// 是否吸顶
let navBarFixed = ref(false)

// 展示左侧的菜单
let sideMenuShow = ref(false)

// 右侧下拉菜单
const dropdown = ref()

const state = reactive({
  circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

/**
 * 当滚动超过 90 时，实现吸顶效果
 */
function watchScroll(): void {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

  if (scrollTop > 90) {
    navBarFixed.value = true
  } else {
    navBarFixed.value = false
  }
}

/**
 * 判断路径是否包含 'user'
 */
function checkPath(): boolean {
  const isTrue = route.path.includes('/user')
  if (isTrue) {
    // 页面移除监听
    window.removeEventListener('scroll', watchScroll)
  } else {
    // 页面添加监听
    window.addEventListener('scroll', watchScroll)
  }
  return isTrue
}

/**
 * 右侧下拉菜单点击出现
 */
function dropdownClick(): void {
  dropdown.value.handleOpen()
}

function toHome(): void {
  router.push({ path: '/index' })
}

function toUserInfo() {
  router.push({ path: '/user-info' })
}
</script>
<style scoped>
.header {
  height: 70px;
  text-align: center;
  color: #fff;
  border-bottom: 1px solid #e2ebef;
}
.top_bar {
  width: 100%;
  border-bottom: 1px solid #e2ebef;
  box-sizing: border-box;
  background-color: #fff;
}
.el-row {
  display: flex;
  align-items: center;
  padding: 10px;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
}
.logo-font {
  font-size: 35px;
  font-weight: 600;
}
/* 修改el的输入框 */
:deep(.el-input__wrapper) {
  font-size: 16px;
  /* color: #6e6f70; */
  background-color: #e2ebef; /*覆盖原背景颜色，设置成透明 */
  border-radius: 20px;
  border: 0;
  box-shadow: 0 0 0 0px;
}

.search-button {
  padding: 0;
  background-color: transparent;
  border: 0;
}

.x_side_menu {
  top: 91.5px;
  padding: 10px;
  overflow-x: hidden;
  z-index: 9999;
  position: fixed;
  width: 300px;
  height: 100vh;
  background-color: #faf8f8;
}

/* 隐藏滚动条 */
.x_side_menu::-webkit-scrollbar {
  display: none;
}

/* 1.过渡动画 */
@keyframes axisX {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}

/* 2. 过渡类名 */
/* 开始 */
.side-menu-enter-active {
  animation: axisX 0.2s;
}
/* 结束 */
.side-menu-leave-active {
  animation: axisX 0.2s reverse;
}

.dropdown-menu {
  width: 300px;
  min-height: 100px;
  /* border: 1px saddlebrown solid; */
  margin-top: 20px;
}

:deep(.el-popper__arrow) {
  display: none;
}

/** 小手样式 */
.cursor {
  cursor: pointer;
}
</style>
