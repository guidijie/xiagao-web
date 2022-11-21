<template>
  <div class="container">
    <div>
      <div>
        <el-row>
          <el-col :span="7" class="auto-height">
            <div class="bottom-box" ref="menu">
              <!-- 头像名称 -->
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
          </el-col>
          <el-col :span="17" class="auto-height">
            <div class="bottom-box bg-router-view" ref="info">
              <!-- <div style="height: 400px" :id="item + ''" v-for="item in 5">{{ item }}</div> -->
              <router-view />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

let menu = ref<null | HTMLElement>(null)
let info = ref<null | HTMLElement>(null)

onMounted(() => {
  setHeight()
})

onBeforeUnmount(() => {
  window.onresize = null
})

const setHeight = () => {
  const num = document.documentElement.clientHeight || document.body.clientHeight
  const height = num - 100 + 'px'
  menu.value!.style.maxHeight = height
  info.value!.style.maxHeight = height
}

window.onresize = () => {
  setHeight()
}

let show = ref(false)

const menus = reactive([
  {
    title: 'Account',
    icon: 'me',
    children: [
      { title: 'My Account', idName: '1' },
      { title: 'Blocked Users', idName: '2' },
      { title: 'Change Password', idName: '3' },
      { title: 'Change Email', idName: '4' },
      { title: 'Manage Subscriptions', idName: '5' },
    ],
  },
  {
    title: 'Notifications',
    icon: 'me',
    children: [{ title: 'Manage Notifications' }],
  },
  {
    title: 'Donations',
    icon: 'me',
    children: [{ title: 'Manage Donations' }, { title: 'Add Credit' }],
  },
  {
    title: 'Channel and Profile',
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
  {
    title: 'Playlists',
    icon: 'me',
    children: [{ title: 'Manage Playlists' }],
  },
  {
    title: 'Messages',
    icon: 'me',
    children: [{ title: 'New Message' }, { title: 'Sent' }],
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
 * 跳转到视频页
 * @param path 路径
 */
function toVideo(path: string): void {
  router.push(path)
}
</script>

<style scoped>
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

.bottom-box {
  overflow: scroll;
}
</style>
