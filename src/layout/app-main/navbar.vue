<template>
  <div class="navbar rowBC">
    <h1>王顺顺的个人博客</h1>
    <div class="right-menu rowSC">
      <el-dropdown trigger="click" size="medium">
        <div class="avatar-wrapper rowCC">
          <span>王顺顺</span>
          <img src="@/assets/avatar.jpeg" class="user-avatar" />
          <CaretBottom style="width: 1em; height: 1em; margin-left: 4px" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <a target="_blank" href="https://github.com/wangshunshun/vite-Blog">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="loginOut">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { nextTick } from 'vue'
import { CaretBottom } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { loginOutReq } from '@/api/system'
import { elMessage } from '@/hooks/use-element'
import { useBasicStore } from '@/store/basic'

const router = useRouter()
const loginOut = () => {
  loginOutReq().then(res => {
    elMessage('退出登录成功')
    nextTick(() => {
      useBasicStore().resetStateAndToLogin()
    })
  })
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  position: relative;
  overflow: hidden;
  z-index:1;
  background-color: #fff;
  padding: 0 40px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);;
  .right-menu {
    cursor: pointer;
  }

  h1 {
    background-color: orange;
    color: #fff;
    display: inline-block;
    padding: 5px;
  }
  .avatar-wrapper>span {
    font-size: 16px;
  }
  .user-avatar {
    margin-left: 10px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
}
</style> 