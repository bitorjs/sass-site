<template>
  <div>
    <iframe :src="ctx.$store.state.collection.openUrl"></iframe>
    <a-modal
      title="新增收藏"
      :visible="ctx.$store.state.collection.showAdd"
      :confirmLoading="confirmLoading"
      @cancel="onClose"
      @ok="onSave"
    >
      <a-form :form="form" layout="horizontal" hideRequiredMark>
        <a-row>
          <a-col>
            <a-form-item
              label="名称"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input
                v-decorator="['name', {
                  rules: [{ required: true, message: '请输入名称' }]
                }]"
                placeholder="请输入名称"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <a-form-item
              label="网址"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input
                v-decorator="['url', {
                  rules: [{ required: true, message: '请输入网址' }]
                }]"
                placeholder="请输入网址"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18, offset: 2 }
};
export default {
  name: "collection",
  data() {
    return {
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this),
      confirmLoading: false
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
      this.form.validateFields(["name", "url"], (errors, values) => {
        if (!errors) {
          this.$post("/collection/add", {
            title: this.form.getFieldValue("name"),
            url: this.form.getFieldValue("url")
          })
            .then(res => {
              if (res) {
                this.onClose();
              }
            })
            .catch(er => {});
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

.xxx {
  position: "absolute";
  left: 0;
  bottom: 0;
  width: "100%";
  border-top: "1px solid #e9e9e9";
  padding: "10px 16px";
  background: "#fff";
  text-align: "right";
}
</style>
