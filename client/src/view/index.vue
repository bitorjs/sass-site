<template>
  <div class="vue-app">
    <div class="app-container">
      <div class="app-header">
        <div class="app-logo"></div>
        <div class="app-toggle-aside-btn" @click="()=>toggle_aside()">
          <a-icon style="fontSize:20px;" :type="`menu-${full?'':'un'}fold`"/>
        </div>
        <div class="app-header-menu">
          <a-menu mode="horizontal">
            <a-menu-item v-for="menu in ctx.$store.state.main.topMenu" :key="menu.name">
              <span @click="menu.click">{{menu.name}}</span>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="app-header-right">
          <HeaderAvatar></HeaderAvatar>
        </div>
      </div>
      <div class="app-body">
        <div class="app-body-aside" :class="{'full': full}">
          <div class="app-body-aside-menu">
            <a-menu mode="inline">
              <template v-for="menu in ctx.$store.state.main.sideMenu">
                <a-menu-item
                  :key="menu.name"
                  v-if="!(menu.children&&menu.children.length>0)"
                  @click="menu.click"
                >{{menu.name}}</a-menu-item>
                <a-sub-menu :title="menu.name" v-else :key="menu.name">
                  <a-menu-item
                    v-for="subMenu in menu.children"
                    :key="subMenu.name"
                    @click="subMenu.click"
                  >{{subMenu.name}}</a-menu-item>
                </a-sub-menu>
              </template>
            </a-menu>
          </div>
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
import HeaderAvatar from "./pie/HeaderAvatar";
export default {
  components: { HeaderAvatar },
  data() {
    return {
      full: true,
      test: []
    };
  },
  mounted() {
    console.log(this.ctx.$store.state.main);
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

.ant-menu {
  background: transparent;
  border: none;
  .ant-menu-root {
    background: transparent;
    border: none;
  }

  .ant-menu-sub {
    background: transparent;
    border: none;
  }

  .ant-menu-item-selected {
    background-color: transparent;
    // &::after {
    //   border: none;
    // }rgba(230, 247, 255, 0.6);
  }
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

        span {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
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

          .ant-menu-item-selected {
            background-color: rgba(230, 247, 255, 0.6);
            // &::after {
            //   border: none;
            // }rgba(230, 247, 255, 0.6);
          }

          ul ul li {
            padding-left: 24px !important;
          }
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



