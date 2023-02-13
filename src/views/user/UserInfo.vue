<template>
  <div class="container">
    <div class="common-layout">
      <el-container>
        <el-aside width="300px">
          <div class="auto-height-100 scroll">
            <div style="margin: 18px 0px">
              <el-row>
                <el-col :span="6">
                  <el-avatar :size="80" :src="'https://avatars.githubusercontent.com/u/15975785?v=4'" />
                </el-col>
                <el-col :span="18" style="margin: auto">
                  <div style="text-align: left; padding-left: 9px">
                    <div>
                      <span>最亮的仔</span><span style="width: 30px"><male style="width: 20px" color="blue" theme="outline" size="10" fill="#333" /></span>
                    </div>
                    <div>{{ 'since: Dec 17, 2017' }}</div>
                    <div><span>Last Login: 42 minutes ago</span></div>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <span @click="toUserIndex()">首页</span>
                </el-col>
              </el-row>
            </div>

            <!-- 菜单 -->
            <div style="text-align: left">
              <div v-for="menu of menus" style="padding-bottom: 15px">
                <div class="hd-uc">
                  <span><me theme="outline" style="width: 30px; height: auto" size="24" fill="#333" /></span>
                  <span style="left: 0px; padding-left: 10px; height: auto; line-height: 26px">{{ menu.title }}</span>
                </div>
                <div @click="toVideo(item.path)" v-for="(item, index) in menu.children" class="sidebar x-cursor-pointer">
                  <span>{{ item.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-aside>
        <el-main>
          <div>
            <router-view />
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { setHeight } from '@/utils/HeightUtils'

const router = useRouter()
const route = useRoute()

let menu = ref<null | HTMLElement>(null)
let info = ref<null | HTMLElement>(null)

onMounted(() => {})

onBeforeUnmount(() => {
  window.onresize = null
})

window.onresize = () => {
  console.log(1111)
  setHeight([menu.value, info.value], 100)
}

let show = ref(false)

const menus = reactive([
  // {
  //   title: '主页',
  //   icon: 'me',
  //   children: [
  //     { title: '最新发布', idName: '1' },
  //     { title: '最多播放', idName: '2' },
  //     { title: '最多收藏', idName: '3' },
  //   ],
  // },
  {
    title: '动态',
    icon: 'me',
    children: [{ title: 'Manage Notifications' }],
  },
  {
    title: '投稿',
    icon: 'me',
    children: [{ title: 'Manage Donations' }, { title: 'Add Credit' }],
  },
  {
    title: '专栏',
    icon: 'me',
    children: [{ title: 'Account Settings' }, { title: 'Profile Settings' }, { title: 'Change Avatar' }],
  },
  {
    title: 'Videos',
    icon: 'me',
    children: [
      { title: 'Uploaded Videos', path: '/user-info/video-page' },
      { title: 'Favorite Videos', path: '/user-info/video-page' },
    ],
  },
])

/**
 * 锚点功能实现
 */
function toView(idName: string): void {
  const item = document.getElementById(idName)
  if (item) {
    item.scrollIntoView()
  }
}

/**
 * 回到首页
 */
function toUserIndex(): void {
  router.push('/user-info/index')
}

/**
 * 跳转到视频页
 * @param path 路径
 */
function toVideo(path: string): void {
  router.push(path)
}
</script>

<style scoped>
.user-info-menu {
  border-right: 1px rgb(238, 238, 238) solid;
}
.hd-uc {
  display: flex;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #1c1b1b;
  margin-bottom: 18px;
}

.sidebar {
  color: #6e6f70;
  font-size: 16px;
  padding-left: 5px;
  padding-bottom: 18px;
}
</style>
