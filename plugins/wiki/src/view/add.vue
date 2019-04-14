<template>
  <div class="add-container">
    <a-form :form="form">
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="标题"
      >
        <a-input
          v-decorator="[
          'title',
          {rules: [{ required: true, message: '请输入标题' }]}
        ]"
          placeholder="请输入标题"
        />
      </a-form-item>
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="类型"
      >
        <a-select
          v-decorator="[
          'contentType',
          {rules: [{ required: true,message: '请选择类型' }]}
        ]"
          placeholder="请选择类型"
        >
          <div slot="dropdownRender" slot-scope="menu">
            <v-nodes :vnodes="menu"/>
            <a-divider style="margin: 4px 0;"/>
            <div style="padding: 8px; cursor: pointer;" @click="showCreateDialog">
              <a-icon type="plus"/>新建类型
            </div>
          </div>
          <a-select-option value="entry">入职相关</a-select-option>
          <a-select-option value="tech">技术分享</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="{span: 20}" label="内容">
        <mavon-editor
          v-decorator="['content', {rules: [{ required: true,message: '请输入内容' }]}]"
          :ishljs="true"
          @imgAdd="imgAdd"
          @imgDel="imgDel"
          @change="change"
          :subfield="ctx.$store.state.wiki.editable"
          :defaultOpen="ctx.$store.state.wiki.editable?'edit':'preview'"
          :toolbarsFlag="ctx.$store.state.wiki.editable"
          :editable="ctx.$store.state.wiki.editable"
          ref="md"
        />
      </a-form-item>
      <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
        <a-button type="primary" @click="onSave">保存</a-button>
      </a-form-item>
    </a-form>
    <a-modal
      title="新建分类"
      :visible="visible"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      @ok="handleOk"
    >
      <a-input placeholder="请输入新的分类"/>
    </a-modal>
  </div>
</template>
<script>
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8, offset: 2 }
};
export default {
  name: "wiki",
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  data() {
    return {
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this),
      needSave: false,
      visible: false,
      confirmLoading: false
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
    },
    onSave() {
      this.form.validateFields(
        ["title", "contentType", "content"],
        (errors, values) => {
          if (!errors) {
          }
        }
      );
    },
    showCreateDialog() {
      this.visible = true;
    },
    handleOk(e) {
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      this.visible = false;
    }
  }
};
</script>
<style lang="less" scoped>
.add-container {
  padding: 20px;
  .v-note-wrapper {
    z-index: 200;
  }
  .ant-select-dropdown {
    z-index: 300;
  }

  .markdown-body {
    height: 100%;
  }
}
</style>
