<template>
  <div class="detail-container">
    <h1>{{title}}</h1>
    <div class="summary">{{summary}}</div>
    <div v-html="content"></div>
  </div>
</template>
<script>
import mavonEditor from "mavon-editor";
const { markdownIt } = mavonEditor;
export default {
  name: "wiki-detail",
  data() {
    return {
      title: null,
      summary: null,
      content: ""
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.$post("/wiki/detail", {
        id: this.ctx.params.id
      }).then(res => {
        if (res && res.data) {
          let data = res.data;
          this.title = data.title;
          this.summary = data.summary;
          this.content = markdownIt.render(data.content);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.detail-container {
  padding: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;

  .summary {
    color: #868080;
    padding: 10px 0 10px;
  }

  .markdown-body {
    height: calc(100vh - 100px);
    box-shadow: none !important;
  }

  .v-note-wrapper .v-note-panel.shadow {
    box-shadow: none !important;
  }
}
</style>
