<template>
  <div class="scroll">
    <!-- 轮播图 -->
    <div>
      <el-carousel :interval="5000" arrow="hover" height="520px">
        <el-carousel-item v-for="item in urls" :key="item">
          <el-image :src="item" :fit="'cover'" style="width: 100%; height: 520px" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div style="padding-top: 80px">
      <div class="container">
        <el-row :gutter="35" style="margin-bottom: 110px">
          <el-col :lg="6" :sm="8" :xs="12" class="x-cursor-pointer" :span="6" v-for="item of miaoshu">
            <el-image class="image-scale" :src="require('@/assets/' + item.url + '.png')" :fit="'cover'" style="margin-bottom: 25px" />
            <h3>{{ item.tile }}</h3>
            <p>{{ item.contend }}</p>
          </el-col>
        </el-row>
      </div>

      <!-- 视频列表 -->
      <div class="video">
        <div v-for="view in viewAllList">
          <div v-if="view.showModule" class="video-module">
            <div class="video-module-type">
              <el-row :gutter="35">
                <el-col :span="20" style="text-align: left">
                  <h3>{{ view.viewType }}</h3>
                </el-col>
                <el-col :span="4" class="video-all x-cursor-pointer">
                  <a>View all</a>
                </el-col>
              </el-row>
            </div>

            <VideoList :videoList="view.viewModuleList" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VideoList from '@/components/VideoList.vue'
import { reactive, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

const miaoshu = reactive([
  {
    // url: 'assets/sv1.png',
    url: 'sv1',
    tile: 'Get paid by',
    contend: 'Accept money from your fans through tips.',
  },
  {
    url: 'sv2',
    tile: 'Grow your audience',
    contend: 'Join a growing community of young millennialaas & get new fans.',
  },
  {
    url: 'sv3',
    tile: 'Simple transfer',
    contend: 'Upload your videos from YouTube with an easy link copy/paste.',
  },
  {
    url: 'sv4',
    tile: 'Make money',
    contend: 'Extra income through Amazon Affiliates on your channel.',
  },
])
const arr: any[] = []
let viewList = reactive(arr)

for (let i = 0; i < 2; i++) {
  miaoshu.forEach((item, index) => {
    viewList.push({
      url: urls[index],
      tile: item.contend,
      author: item.tile,
    })
  })
}
type Obj = {
  viewType: string
  showModule: boolean
  viewModuleList: any[]
}
let list: Obj | any = []

list.push({
  viewType: 'Popular Videos',
  showModule: true,
  viewModuleList: viewList,
})
let viewAllList = reactive(list)
let objct = reactive({ num: 5 })

const scrollListener = () => {
  // 获取距离顶部的距离
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
  // 获取可视区的高度
  const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
  // 获取滚动条的总高度
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
  if (scrollTop + windowHeight + 1 >= scrollHeight) {
    // 把距离顶部的距离加上可视区域的高度 等于或者大于滚动条的总高度就是到达底部
    if (objct.num) {
      objct.num = --objct.num
    }
    console.log(objct.num)
    if (objct.num > 0) {
      viewAllList.push({
        viewType: 'Popular Videos',
        showModule: true,
        viewModuleList: viewList,
      })
    }
  }
}

// 页面添加监听
window.addEventListener('scroll', scrollListener)

onUnmounted(() => {
  window.removeEventListener('scroll', scrollListener)
})
</script>
<style scoped>
/* 轮播图切换按钮样式 */
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 600px;
  margin: 0;
  text-align: center;
}

.container h3 {
  font-size: 16px;
  font-weight: 600;
}
.container p {
  font-size: 16px;
  color: #6e6f70;
}

.container .x-cursor-pointer .image-scale {
  transition: all 0.5s;
}

/* 鼠标移入图片放大效果 */
.container .x-cursor-pointer:hover .image-scale {
  transition: all 0.5s;
  transform: scale(1.5);
}

.video {
  margin: auto;
  max-width: 1100px;
  padding-bottom: 30px;
}

.video-module-type {
  padding-top: 30px;
}
</style>
