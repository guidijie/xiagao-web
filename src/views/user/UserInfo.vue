<template>
    <div class="container">
        <div>
            <div>
                <el-row>
                    <el-col :span="7">
                        <!-- 头像名称 -->
                        <div style="margin: 18px 0px">
                            <el-row>
                                <el-col :span="6">
                                    <el-avatar :size="80"
                                        :src="'https://avatars.githubusercontent.com/u/15975785?v=4'" />
                                </el-col>
                                <el-col :span="18" style="margin: auto;">
                                    <div style="text-align:left;padding-left:9px">
                                        <div><span>最亮的仔</span><span style="width: 30px"><male style="width: 20px" color="blue" theme="outline" size="10" fill="#333"/></span></div>
                                        <div>{{ 'since: Dec 17, 2017' }}</div>
                                        <div><span>Last Login: 42 minutes ago</span></div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- 菜单 -->
                        <div style="text-align:left;">
                            <div v-for="menu of menus" style="padding-bottom: 15px;">
                                <div class="hd-uc">
                                    <span><me theme="outline" style="width: 30px; height: auto;" size="24" fill="#333"/></span>
                                    <span style="left:0px;padding-left: 10px; height: auto;line-height: 26px;">{{menu.title}}</span>
                                </div>
                                <div v-for="(item, index) in menu.children" class="sidebar x-cursor-pointer">
                                    <span>{{item.title}}</span>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="17">
                        <div style="background-color: red;">sfagfgs</div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const menus = reactive([
    {
        title: 'Account',
        icon: 'me',
        children: [
            {title: 'My Account'},
            {title: 'Blocked Users'},
            {title: 'Change Password'},
            {title: 'Change Email'},
            {title: 'Manage Subscriptions'},
        ]
    },
    {
        title: 'Notifications',
        icon: 'me',
        children: [
            {title: 'Manage Notifications'},
        ]
    },
    {
        title: 'Donations',
        icon: 'me',
        children: [
            {title: 'Manage Donations'},
            {title: 'Add Credit'},
        ]
    },
    {
        title: 'Channel and Profile',
        icon: 'me',
        children: [
            {title: 'Account Settings'},
            {title: 'Profile Settings'},
            {title: 'Change Avatar'},
        ]
    },
    {
        title: 'Videos',
        icon: 'me',
        children: [
            {title: 'Uploaded Videos'},
            {title: 'Favorite Videos'},
        ]
    },
    {
        title: 'Playlists',
        icon: 'me',
        children: [
            {title: 'Manage Playlists'},
        ]
    },
    {
        title: 'Messages',
        icon: 'me',
        children: [
            {title: 'New Message'},
            {title: 'Sent'},
        ]
    },
]);

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
</style>