<template>
  <div class="vue-app">
    <div class="app-container">
      <div class="app-header">
        <div class="app-logo"></div>
        <div class="app-toggle-aside-btn" @click="()=>toggle_aside()"></div>
        <div class="app-header-menu"></div>
        <div class="app-header-right"></div>
      </div>
      <div class="app-body">
        <div class="app-body-aside" :class="{'full': full}">
          <div class="app-body-aside-menu"></div>
        </div>
        <div class="app-body-main">
          <div class="app-body-main-header"></div>
          <div class="app-body-main-content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      full: true
    };
  },
  methods: {
    toggle_aside() {
      this.full = !this.full;
    }
  }
};
</script>
<style lang="less">
body,
html {
  margin: 0;
  height: 100%;
  font-family: Arial, Microsoft YaHei, "\9ED1\4F53", "\5B8B\4F53", sans-serif;
}

body .vue-app a,
html .vue-app a {
  text-decoration: none;
}
</style>
<style lang="less" scoped>
.position_full() {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.vue-app {
  .position_full();
  background-color: #f8f8f9;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  position: relative;
  .app-container {
    .position_full();
    display: flex;
    flex-direction: column;

    .app-header {
      height: 60px;
      display: flex;
      .app-logo {
        width: 200px;
        background: url(/assets/d2.png) no-repeat center center;
        background-size: auto 100%;
      }

      .app-toggle-aside-btn {
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        align-items: center;
        cursor: pointer;
        float: left;
        height: 60px;
        width: 60px;
      }

      &-menu {
        display: flex;
        flex-shrink: 1;
        flex-grow: 1;
        align-items: center;
        overflow: hidden;
      }

      &-right {
        flex-grow: 0;
        float: right;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
      }
    }

    .app-body {
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;

      &-aside {
        width: 65px;
        opacity: 1;
        flex-shrink: 0;
        flex-grow: 0;
        transition: width 0.3s;
        position: relative;

        &-menu {
          .position_full();
          overflow: hidden;
        }
        &.full {
          width: 200px; //65px;
        }
      }

      &-main {
        padding: 0;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-shrink: 1;
        flex-grow: 1;

        &-content {
          .position_full();
          overflow: hidden;
        }
      }
    }
  }
}
</style>



