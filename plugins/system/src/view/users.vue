<template>
  <div class="users-container">
    <a-row>
      <a-col :span="24">
        <a-input-group compact>
          <a-radio-group v-model="searchType">
            <a-radio-button value="userId">用户ID</a-radio-button>
            <a-radio-button value="userName">姓名</a-radio-button>
            <a-radio-button value="userMobile">手机号</a-radio-button>
          </a-radio-group>
          <a-input-search
            style="width: 200px;"
            placeholder="请输入..."
            @search="onSearch"
            enterButton="查询"
          />
        </a-input-group>
      </a-col>
    </a-row>

    <a-row style="margin-top:20px;">
      <a-col :span="24" :style="{ textAlign: 'right' , paddingRight:'10px'}">
        <a-button @click="showAddDialog">新增</a-button>
      </a-col>
    </a-row>
    <a-table :columns="columns" :dataSource="data">
      <a slot="action" href="javascript:;">
        <span class="edit" @click="showEditDialog">编辑</span>
      </a>
      <p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{record.description}}</p>
    </a-table>

    <a-drawer
      :title="dialogTitle"
      :width="720"
      @close="onClose"
      :visible="ctx.$store.state.system.showUser"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
    >
      <a-form :form="form" layout="horizontal" hideRequiredMark>
        <a-form-item
          label="用户ID"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input
            v-decorator="['userId', {
                  rules: [{ required: true, message: '请输入用户ID' }]
                }]"
            placeholder="请输入用户ID"
          />
        </a-form-item>

        <a-form-item
          label="用户名"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input
            v-decorator="['userName', {
                  rules: [{ required: true, message: '请输入用户名' }]
                }]"
            style="width: 100%"
            placeholder="请输入用户名"
          />
        </a-form-item>

        <a-form-item
          label="手机号"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input
            v-decorator="['userMobile', {
                  rules: [{ required: true, message: '请输入用户手机号' }]
                }]"
            style="width: 100%"
            placeholder="请输入用户手机号"
          />
        </a-form-item>
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
const columns = [
  { title: "用户ID", dataIndex: "userId", key: "userId" },
  { title: "姓名", dataIndex: "name", key: "name" },
  { title: "手机", dataIndex: "mobile", key: "mobile" },
  {
    title: "操作",
    dataIndex: "-",
    key: "x",
    scopedSlots: { customRender: "action" }
  }
];

export default {
  name: "system",
  data() {
    return {
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      },
      dialogTitle: "",
      searchType: "userName",
      userId: null,
      userName: null,
      userMobile: null,
      data: [],
      columns
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.$get("/system-api/users").then(res => {
        this.data = res;
      });
    },
    onSearch() {
      this.getUsers();
    },
    onClose() {
      this.ctx.$store.state.system.showUser = false;
    },
    showAddDialog() {
      this.dialogTitle = "添加标题";
      this.ctx.$store.state.system.showUser = true;
    },
    showEditDialog() {
      this.dialogTitle = "编辑用户";
      this.userId = 1;
      this.userName = "hzj";
      this.userMobile = "15925611827";
      this.ctx.$store.state.system.showUser = true;
    },
    onSave() {
      this.ctx.$store.state.system.showUser = true;
    }
  }
};
</script>
<style lang="less" scoped>
.users-container {
  background: white;
}
</style>
