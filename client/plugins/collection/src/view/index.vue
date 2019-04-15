<template>
  <div>
    <iframe :src="ctx.$store.state.collection.openUrl"></iframe>
    <a-drawer
      title="添加收藏"
      :width="720"
      @close="onClose"
      :visible="ctx.$store.state.collection.showAdd"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
    >
      <a-form :form="form" layout="vertical" hideRequiredMark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="名称">
              <a-input
                v-decorator="['name', {
                  rules: [{ required: true, message: '请输入名称' }]
                }]"
                placeholder="请输入名称"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="网址">
              <a-input
                v-decorator="['url', {
                  rules: [{ required: true, message: '请输入网址' }]
                }]"
                style="width: 100%"
                placeholder="请输入网址"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
      >
        <a-button :style="{marginRight: '8px'}" @click="onClose">取消</a-button>
        <a-button @click="onSave" type="primary">保存</a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  name: "collection",
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  mounted() {},
  methods: {
    onClose() {
      console.log("....");
      this.ctx.$store.state.collection.showAdd = false;
      // this.showAdd = false;
    },
    onSave() {
      console.log(this.form.getFieldValue("name"));
      this.ctx.$store.state.main.sideMenu.push({
        name: this.form.getFieldValue("name"),
        click: () => {
          this.ctx.$store.state.collection.openUrl = this.form.getFieldValue(
            "url"
          );
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
iframe {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  border: none;
}
</style>
