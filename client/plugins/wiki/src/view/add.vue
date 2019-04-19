<template>
  <div class="add-container">
    <a-form :form="form">
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="标题"
      >
        <a-input-group compact>
          <a-input
            v-decorator="[
          'title',
          {rules: [{ required: true, message: '请输入标题' }]}
        ]"
            placeholder="请输入标题"
            style="width:200px;"
          />
          <!-- </a-form-item>
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="类型"
          >-->

          <a-select
            v-decorator="[
          'contentType',
          {rules: [{ required: true,message: '请选择类型' }], initialValue:  initType||(typeList[0]&&typeList[0].id)}
        ]"
            placeholder="请选择类型"
            style="width:100px;"
            @change="handleSelectChange"
          >
            <a-select-option v-for="item in typeList" :key="item.id" :value="item.id">{{item.title}}</a-select-option>
          </a-select>
          <a-button @click="showCreateDialog">新建分类</a-button>
        </a-input-group>
      </a-form-item>
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="关键词"
      >
        <a-select
          v-decorator="['keywords',{rules: [{ required: true, message: '请输入关键词' }]}]"
          placeholder="请输入关键词"
          mode="tags"
          style="width: 100%"
        ></a-select>
      </a-form-item>
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="摘要"
      >
        <a-textarea
          v-decorator="['summary',{rules: [{ required: true, message: '请输入摘要' }]}]"
          placeholder="请输入摘要"
          :rows="4"
        ></a-textarea>
      </a-form-item>
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="{span: 20}"
        label="内容"
        :validate-status="contentValidate"
        :help="contentHelp"
      >
        <mavon-editor
          v-model="content"
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
      <a-form :form="form">
        <a-form-item :label-col="{ span: 4}" :wrapper-col="{ span: 20 }" label="分类名称">
          <a-input
            v-decorator="['newType', {
                  rules: [{ required: true, message: '请输入名称' }]
                }]"
            placeholder="请输入新的分类"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 20 }
};
const formTailLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 18, offset: 2 }
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
      confirmLoading: false,
      initType: null,
      content: "",
      contentValidate: "",
      contentHelp: ""
    };
  },
  mounted() {
    // this.initType();
  },
  computed: {
    typeList() {
      return this.ctx.$store.state.wiki.typeList;
    }
  },
  methods: {
    // initType() {
    //   this.typeList = this.ctx.$store.state.wiki.typeList;
    // },
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
    change(content) {
      this.needSave = true;
      this.contentHelp = content ? "" : "请输入内容";
      this.contentValidate = content ? "" : "error";
    },
    save() {
      if (this.needSave === false) return;
      this.needSave = false;
    },
    onSave() {
      if (!this.content) {
        this.contentHelp = this.content ? "" : "请输入内容";
        this.contentValidate = this.content ? "" : "error";
      }
      this.form.validateFields(
        ["title", "contentType", "content", "keywords", "summary"],
        (errors, values) => {
          if (!errors) {
            let contentType = this.form.getFieldValue("contentType");
            if (this.content) {
              const keywords = this.form.getFieldValue("keywords");
              this.$post("/wiki/add/article", {
                title: this.form.getFieldValue("title"),
                contentType,
                content: this.content,
                keywords: keywords.join("|"),
                summary: this.form.getFieldValue("summary")
              })
                .then(res => {
                  if (res) {
                    this.ctx.app.redirect(`/wiki/type/${contentType}`);
                  }
                })
                .catch(e => {});
            }
          }
        }
      );
    },
    showCreateDialog() {
      this.visible = true;
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    },
    handleOk(e) {
      this.form.validateFields(["newType"], (errors, values) => {
        if (!errors) {
          this.confirmLoading = true;
          this.$post("/wiki/add/type", {
            type: this.form.getFieldValue("newType")
          })
            .then(res => {
              this.visible = false;
              this.confirmLoading = false;

              this.ctx.$post("/wiki/types").then(res => {
                this.ctx.$store.state.wiki.typeList = res.data;
              });

              this.initType = res.data[0].id;
            })
            .catch(e => {
              this.visible = false;
              this.confirmLoading = false;
            });
        }
      });
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
    max-height: 400px;
  }
}
</style>
