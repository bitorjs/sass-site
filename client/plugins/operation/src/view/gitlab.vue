<template>
  <div></div>
</template>
<script>
export default {
  name: "gitlab",
  data() {
    return {};
  },
  mounted() {
    this.$post("/operation/gitlab/groups").then(res => {});
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
