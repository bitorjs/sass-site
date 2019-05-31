<template>
  <div class="login">
    <a-form @submit.prevent="doLogin" :form="form">
      <a-tabs
        size="large"
        :tabBarStyle="{textAlign: 'center'}"
        style="padding: 0 2px;"
        :activeKey="activeKey"
        @change="handleTabsChange"
      >
        <a-tab-pane tab="账户密码登录" key="1">
          <a-alert
            type="error"
            :closable="true"
            v-show="error"
            :message="error"
            showIcon
            style="margin-bottom: 24px;"
          ></a-alert>
          <a-form-item>
            <a-input
              size="large"
              placeholder="账户: bitores"
              v-decorator="['name', {rules: [{ required: true, message: '请输入账户名', whitespace: true}]}]"
            >
              <a-icon slot="prefix" type="user"></a-icon>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              size="large"
              type="password"
              placeholder="密码: ab123456"
              v-decorator="['password', {rules: [{ required: true, message: '请输入密码', whitespace: true}]}]"
            >
              <a-icon slot="prefix" type="lock"></a-icon>
            </a-input>
          </a-form-item>
        </a-tab-pane>
        <a-tab-pane tab="手机号登录" key="2">
          <a-form-item>
            <a-input
              size="large"
              placeholder="手机号"
              v-decorator="['mobile', {rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"
            >
              <a-select slot="addonBefore" size="large" defaultValue="+86">
                <a-select-option value="+86">+86</a-select-option>
                <a-select-option value="+87">+87</a-select-option>
              </a-select>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-row :gutter="8" style="margin: 0 -4px">
              <a-col :span="16">
                <a-input
                  size="large"
                  placeholder="验证码"
                  v-decorator="['mail', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"
                >
                  <a-icon slot="prefix" type="mail"></a-icon>
                </a-input>
              </a-col>
              <a-col :span="8" style="padding-left: 4px">
                <a-button
                  style="width: 100%"
                  class="captcha-button"
                  size="large"
                  :disabled="state.smsSendBtn"
                  @click.stop.prevent="getCaptcha"
                  v-text="!state.smsSendBtn && '获取验证码'||(state.time+' s')"
                >获取验证码</a-button>
              </a-col>
            </a-row>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>
      <a-form-item>
        <a-button
          :loading="loading"
          style="width: 100%; margin-top: 4px"
          size="large"
          htmlType="submit"
          type="primary"
        >登录</a-button>
      </a-form-item>
      <div>
        <a style="float: right" @click="regist">注册账户</a>
      </div>
    </a-form>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      // form: null,
      loading: false,
      error: "",
      activeKey: "1",
      state: {
        time: 60,
        smsSendBtn: false,
        passwordLevel: 0,
        passwordLevelChecked: false,
        percent: 10,
        progressColor: "#FF0000"
      }
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  computed: {
    systemName() {
      return this.$store.state.setting.systemName;
    },
    copyright() {
      return 2; //this.$store.state.setting.copyright;
    }
  },
  created() {
    // this.$db.clear();
    // this.$router.options.routes = [];
  },
  methods: {
    doLogin() {
      console.log(0);
      if (this.activeKey === "1") {
        // 用户名密码登录
        this.form.validateFields(["name", "password"], (errors, values) => {
          if (!errors) {
            this.loading = true;
            let name = this.form.getFieldValue("name");
            let password = this.form.getFieldValue("password");
            this.$post("/login", {
              username: name,
              password: password
            })
              .then(res => {
                setTimeout(() => {
                  this.loading = false;
                }, 500);

                if (res.data) {
                  this.$message.success("登录成功");
                  let token = res.token;
                  sessionStorage.setItem("token", token);

                  this.ctx.app.redirect("/wiki");
                } else {
                  this.$message.error("抱歉，登录失败");
                }
              })
              .catch(err => {
                setTimeout(() => {
                  this.loading = false;
                }, 500);
              });
          }
        });
      }
      if (this.activeKey === "2") {
        // 手机验证码登录
        // this.$message.warning("暂未开发");
        this.form.validateFields(["mobile", "mail"], (errors, values) => {
          if (!errors) {
            this.loading = true;
            let mobile = this.form.getFieldValue("mobile");
            let mail = this.form.getFieldValue("mail");
            this.$post("/login", {
              username: mobile,
              password: mail
            })
              .then(r => {
                let data = r.data.data;
                this.saveLoginData(data);
                setTimeout(() => {
                  this.loading = false;
                }, 500);
                this.$router.push("/");
              })
              .catch(() => {
                setTimeout(() => {
                  this.loading = false;
                }, 500);
              });
          }
        });
      }
    },
    regist() {
      this.$emit("regist", "Regist");
    },

    handlePhoneCheck(rule, value, callback) {
      callback();
    },
    getCaptcha(e) {
      e.preventDefault();
      let that = this;

      this.form.validateFields(["mobile"], { force: true }, (err, values) => {
        if (!err) {
          this.state.smsSendBtn = true;

          let interval = window.setInterval(() => {
            if (that.state.time-- <= 0) {
              that.state.time = 60;
              that.state.smsSendBtn = false;
              window.clearInterval(interval);
            }
          }, 1000);
        }
      });
    },
    handleTabsChange(val) {
      this.activeKey = val;
    },
    // ...mapMutations({
    //   setToken: 'account/setToken',
    //   setExpireTime: 'account/setExpireTime',
    //   setPermissions: 'account/setPermissions',
    //   setRoles: 'account/setRoles',
    //   setUser: 'account/setUser',
    //   setTheme: 'setting/setTheme',
    //   setLayout: 'setting/setLayout',
    //   setMultipage: 'setting/setMultipage',
    //   fixSiderbar: 'setting/fixSiderbar',
    //   fixHeader: 'setting/fixHeader',
    //   setColor: 'setting/setColor'
    // }),
    saveLoginData(data) {
      // this.setToken(data.token);
      // this.setExpireTime(data.exipreTime);
      // this.setUser(data.user);
      // this.setPermissions(data.permissions);
      // this.setRoles(data.roles);
      // this.setTheme(data.config.theme);
      // this.setLayout(data.config.layout);
      // this.setMultipage(data.config.multiPage === "1");
      // this.fixSiderbar(data.config.fixSiderbar === "1");
      // this.fixHeader(data.config.fixHeader === "1");
      // this.setColor(data.config.color);
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  .icon {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.2);
    margin-left: 16px;
    vertical-align: middle;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
}
</style>
