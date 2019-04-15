<template>
  <div class="detail-container" v-html="ctx.$store.state.wiki.detail"></div>
</template>
<script>
export default {
  name: "wiki-detail"
};
</script>
<style lang="less" scoped>
.detail-container {
  padding: 20px;
}
</style>
