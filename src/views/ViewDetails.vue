<template>
  <div class="common-layout">
    <div class="container">
      <div style="margin-top: 30px">
        <el-row>
          <!-- 左边内容 -->
          <el-col :span="18">
            <!-- 视频 -->
            <div style="height: 500px; background-color: blue">
              <vue3VideoPlay v-bind="options" poster="" />
            </div>
            <!-- 视频描述及点赞 -->
            <div class="vid-info">
              <h3>Kingdom Come: Deliverance Funny Moments and Fails Compilation</h3>
              <div class="clearfix">
                <el-row>
                  <el-col :span="12">
                    <div class="clearfix-span"><span>60,723,169 views</span></div>
                  </el-col>
                  <el-col :span="12">
                    <div class="clearfix-btn">
                      <div style="margin-right: 20px"><thumbs-up theme="outline" size="24" fill="#333" /><span>388k</span></div>
                      <div><thumbs-down theme="outline" size="24" fill="#333" /><span>18k</span></div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>

            <!-- 作者信息 -->
            <div class="abt-mk">
              <div class="info-pr-sec">
                <el-row>
                  <el-col :span="3">
                    <div class="info-pr-sec-img cent">
                      <el-avatar :size="60" src="https://empty" @error="errorHandler">
                        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                      </el-avatar>
                    </div>
                  </el-col>
                  <el-col :span="7">
                    <div class="info-pr-sec-author cent">
                      <div>
                        <h4>ScereBro</h4>
                        <span>Published on Oct 22, 2017</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="7">
                    <div class="info-pr-sec-icon cent">
                      <add-music theme="outline" size="24" fill="#333" />
                      <like theme="outline" size="24" fill="#333" />
                      <link-one theme="outline" size="24" fill="#333" />
                      <report theme="outline" size="24" fill="#333" />
                    </div>
                  </el-col>
                  <el-col :span="7">
                    <div class="info-pr-sec-btn cent">
                      <div>
                        <el-button style="width: 80px" color="#26e491" round>打赏</el-button> <el-button style="width: 120px" color="#272626" round>订阅<span>13W</span></el-button>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>

            <!-- 视频内容内容 -->
            <div>
              <div>
                <el-row>
                  <el-col :span="3"> </el-col>
                  <el-col :span="21">
                    <div style="text-align: left">
                      Cast: Nathan Drake Victor Sullivan Sam Drake Elena Fisher Category : Gaming PS4 Exclusive Gameplay 1080p About : Three years after the events of Uncharted 3: Drake's Deception, Nathan Drake, now retired as a fortune hunter, has settled into a normal life with his wife Elena Fisher. His world is then turned upside down when his older brother Sam, long believed to be dead,
                      suddenly reappears seeking Drake's help.
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>

            <div style="height: 300px; margin: auto; background-color: aquamarine"><span>评论区</span></div>
          </el-col>
          <!-- 右边内容 -->
          <el-col :span="6">
            <div>
              <VideoList :spanNum="24" :videoList="videoList" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VideoList from '@/components/VideoList.vue'
import { ref, reactive, onMounted } from 'vue'

const options = reactive({
  width: '100%', //播放器高度
  height: '100%', //播放器高度
  color: '#409eff', //主题色
  title: '', //视频名称
  src: require('../assets/videoplayback.mp4'), //视频源
  muted: true, //静音
  webFullScreen: false,
  speedRate: ['0.75', '1.0', '1.25', '1.5', '2.0'], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'], //显示所有按钮,
})

const errorHandler = () => true

const videoList = reactive([
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
</script>
<style scoped>
.container {
  max-width: 1140px;
}
.vid-info {
  border-bottom: 1px solid #e2ebef;
}
.vid-info h3 {
  text-align: left;
}

.clearfix {
  line-height: 26.4px;
  color: #6e6f70;
  font-size: 16px;
  padding-bottom: 15px;
}
.clearfix-span {
  text-align: left;
}
.clearfix-btn {
  text-align: right;
  float: right;
}
.clearfix-btn div {
  float: left;
  display: flex;
}
.clearfix-btn span {
  margin-left: 5px;
}
.info-pr-sec {
  margin-top: 10px;
}
/* 垂直居中 */
.info-pr-sec .el-row {
  display: flex;
  align-items: center;
}
.info-pr-sec-img,
.info-pr-sec-author,
.info-pr-sec-icon {
  float: left;
}

.info-pr-sec-author {
  text-align: left;
}
.info-pr-sec-author h4 {
  margin: 0;
}

.info-pr-sec-icon span {
  margin-right: 20px;
}
.info-pr-sec-btn {
  float: right;
}

/* video */

.video-list {
  margin-left: 30px;
  border-bottom: 1px solid #e2ebef;
  padding-bottom: 10px;
}
</style>
