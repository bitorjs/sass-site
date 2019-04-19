<template>
  <a-dropdown style="vertical-align: initial">
    <span style="cursor: pointer">
      <a-avatar class="avatar" size="small" shape="circle" :src="avatar"/>
      <span class="curr-user">{{user.username}}</span>
    </span>
    <a-menu style="width: 150px" slot="overlay">
      <a-menu-item @click="openProfile">
        <a-icon type="user"/>
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item @click="updatePassword">
        <a-icon type="key"/>
        <span>密码修改</span>
      </a-menu-item>
      <a-menu-divider></a-menu-divider>
      <a-menu-item @click="handleSettingClick">
        <a-icon type="setting"/>
        <span>系统定制</span>
      </a-menu-item>
      <a-menu-divider></a-menu-divider>
      <a-menu-item @click="logout">
        <a-icon type="logout"/>
        <span>退出登录</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: "HeaderAvatar",
  data() {
    return {
      user: {},
      updatePasswordModelVisible: false
    };
  },
  computed: {
    avatar() {
      return "1"; //`static/avatar/${this.user.avatar}`;
    }
  },
  methods: {
    handleSettingClick() {},
    openProfile() {},
    updatePassword() {},
    handleCancelUpdate() {},
    logout() {}
  }
};
</script>

<style lang="less" scoped>
.ant-avatar-sm {
  width: 30px;
  height: 30px;
}
.avatar {
  margin: 20px 4px 20px 0;
  color: #1890ff;
  background: #b3acacd9;
  vertical-align: middle;
}
.curr-user {
  font-weight: 600;
  // margin-left: 6px;
}
</style>
