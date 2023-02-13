<!--  -->
<template>
  <div class="auto-height-140">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="最新发布" name="first">
        <el-scrollbar class="auto-height-190">
          <video-list-two :videoList="videoList" />
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="最多播放" name="third">
        <el-scrollbar class="auto-height-190">
          <video-list-two :videoList="videoList" />
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="最多收藏" name="fourth">
        <el-scrollbar class="auto-height-190">
          <video-list-two :videoList="videoList" />
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import VideoListTwo from '@/components/VideoListTwo.vue'

interface MyViewType {
  url: string
  title: string
  author: string
}

const videoList: Array<MyViewType> = reactive([
  {
    url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'Accept money from your fans through tips.',
    author: 'Get paid by',
  },
  {
    url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    title: 'Join a growing community of young millennialaas & get new fans.',
    author: 'Grow your audience',
  },
  {
    url: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    title: 'Upload your videos from YouTube with an easy link copy/paste.',
    author: 'Simple transfer',
  },
  {
    url: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    title: 'Extra income through Amazon Affiliates on your channel.',
    author: 'Make money',
  },
  {
    url: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    title: 'Accept money from your fans through tips.',
    author: 'Get paid by',
  },
  {
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    title: 'Join a growing community of young millennialaas & get new fans.',
    author: 'Grow your audience',
  },
  {
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    title: 'Extra income through Amazon Affiliates on your channel.',
    author: 'Make money',
  },
])
const activeName = ref('first')
</script>

<style scoped></style>
