<template>
  <div class="dashboard">
    <div class="silder">
      <header class="header">
        <div class="site-brand-container">
          <div class="site-meta">
            <span>主页</span>
            <p class="site-title">dashbord</p>
          </div>
        </div>
        <div class="site-nav">
          <ul class="menu">
            <li class="menu-item">
              <el-icon>
                <HomeFilled />
              </el-icon>
              <span>主页</span>
            </li>
            <li class="menu-item">
              <el-icon>
                <List />
              </el-icon>
              <span>文档</span>
            </li>
            <li class="menu-item">
              <el-icon>
                <PictureFilled />
              </el-icon>
              <span>相册</span>
            </li>
          </ul>
        </div>
      </header>
      <aside class="sidebar">
        <div class="sidebar-inner">
          <div class="sidebar-panel-container">
            <div class="site-author">
              <img src="@/assets/blog.png" alt="">
              <p>王顺顺</p>
              <p>现任于前端开发</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
    <div class="content"></div>
  </div>
</template>
<script setup lang="ts">
import { HomeFilled, List, PictureFilled } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.dashboard {
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: calc(100% - 20px);
  

  .silder {
    width: 240px;
  }

  .header {
    background: #fff;
    border-radius: initial;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .site-brand-container {
    background: #222;
    display: flex;
  }

  .site-meta {
    padding: 20px 0;
    flex-grow: 1;
    text-align: center;

    span {
      font-size: 18px;
      color: #fff;
    }

    .site-title {
      color: #ddd;
      font-size: 0.8125em;
      margin: 10px 10px 0;
    }
  }

  .menu {
    margin: 0;
    padding: 1em 20px;
    text-align: center;

    .menu-item {
      position: relative;
      text-align: left;
      display: flex;
      margin: 20px 0;

      span {
        margin-left: 8px;
      }
    }
  }

  .sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 12px;

    .sidebar-inner {
      background: #fff;
      border-radius: initial;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
      box-sizing: border-box;
      margin-top: 12px;
      max-height: calc(100vh - 24px);
      color: #999;
      padding: 18px 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .sidebar-panel-container {
      img {
        width: 120px;
        height: 120px;
      }
    }
  }
}

@media (min-width: 1600px) {
  .dashboard {
    width: 73%;
  }
}

@media (min-width: 1200px) {
  .dashboard {
    width: 1160px;
  }
}
</style>