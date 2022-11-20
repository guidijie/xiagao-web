<template>
  <div class="video-list">
    <el-row :gutter="35" style="text-align: left">
      <el-col :lg="spanNum ? spanNum : 6" :sm="spanNum ? spanNum : 8" :xs="spanNum ? spanNum : 12" :span="spanNum" v-for="item of props.videoList" style="margin-bottom: 26px">
        <div class="video-item x-cursor-pointer">
          <div class="video-img" @click="toViewDetails">
            <el-image class="image-scale" :src="item.url" :fit="'cover'" />
            <spam class="video-watch-later">
              <View />
            </spam>
            <spam class="video-time">15:20</spam>
          </div>
          <h3 @click="toViewDetails" class="x-text-overflow">{{ item.title }}</h3>
          <h4>
            {{ item.author }}
            <span>
              <SuccessFilled style="height: 20px; width: 20px" color="#67C23A" />
            </span>
          </h4>
          <span>686K views .1 week ago</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { SuccessFilled, View } from '@element-plus/icons-vue'
import { ElCol, ElImage, ElRow } from 'element-plus'
import { useRouter } from 'vue-router'

interface MyViewType {
  url: string
  title: string
  author: string
}

const router = useRouter()

const props = defineProps({
  videoList: {
    type: Array,
    default: () => [],
  },
  spanNum: {
    type: Number,
    default: () => 6,
  },
})

/* 跳转到视频详情页 */
function toViewDetails(): void {
  router.push({ path: '/view-details' })
}
</script>
<style scoped>
.video-list {
  border-bottom: 1px solid #e2ebef;
  padding-bottom: 10px;
}

.video-list .image-scale {
  min-width: 262px;
  min-height: 164px;
}

:deep(.el-image) {
  position: relative;
  display: block;
  overflow: hidden;
}

.video-item .image-scale {
  transition: all 0.5s;
}

.video-item:hover .image-scale {
  transform: scale(1.3);
  transition: all 0.5s;
}

.video-all {
  text-align: right;
  color: #6e6f70;
  font-size: 16px;
  margin: auto;
}

.video-list h3 {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #1c1b1b;
  font-size: 16px;
}

.video-list h4 {
  color: #6e6f70;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 0px;
  font-weight: 400;
  display: flex;
  line-height: 22px;
}

.video-list h4 span {
  margin-left: 5px;
}

.video-list span {
  color: #6e6f70;
  font-size: 14px;
  font-weight: 400;
}

.video-img {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
}

.video-time {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 21px;
  line-height: 21px;
  color: #ffffff;
  font-size: 14px;
  padding: 0 6px;
  background: rgba(38, 38, 54, 0.9);
  border-radius: 3px;
}

.video-watch-later {
  position: absolute;
  transform: translateX(40px);
  top: 7px;
  right: 7px;
  width: 30px;
  height: 30px;
  width: 30px;
  height: 30px;
  background: rgba(60, 60, 60, 0.9);
  line-height: 36.7px;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

.video-watch-later svg {
  max-width: 19.6px;
  max-height: 18.3px;
}

.video-item:hover .video-watch-later {
  transform: translateX(0);
  opacity: 1;
}
</style>
