<template>
  <mavon-editor
    v-model="value"
    :ishljs="true"
    @imgAdd="imgAdd"
    @imgDel="imgDel"
    @change="change"
    @save="save"
    :subfield="ctx.$store.state.wiki.editable"
    :defaultOpen="ctx.$store.state.wiki.editable?'edit':'preview'"
    :toolbarsFlag="ctx.$store.state.wiki.editable"
    :editable="ctx.$store.state.wiki.editable"
    ref="md"
  />
</template>
<script>
// :toolbarsFlag="false"
// :subfield="false"
// :defaultOpen="'preview'"
export default {
  name: "wiki",
  data() {
    return {
      value: "# 标题",
      needSave: false
    };
  },
  methods: {
    // 绑定@imgAdd event
    imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);
      // axios({
      //   url: "server url",
      //   method: "post",
      //   data: formdata,
      //   headers: { "Content-Type": "multipart/form-data" }
      // }).then(url => {
      //   // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
      //   /**
      //    * $vm 指为mavonEditor实例，可以通过如下两种方式获取
      //    * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
      //    * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
      //    */
      //   $vm.$img2Url(pos, url);
      // });
    },

    imgDel() {},
    change() {
      this.needSave = true;
    },
    save() {
      if (this.needSave === false) return;
      this.needSave = false;
    }
  }
};
</script>
<style lang="less" scoped>
.markdown-body {
  height: 100%;
}
</style>
