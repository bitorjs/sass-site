<template>
  <div class="gitlab-container">
    <a-input-search
      placeholder="请输入项目名"
      @search="onSearch"
      enterButton="搜索"
      style="max-width:400px;"
    />
    <!--  -->

    <a-table
      :rowKey="record=>record.id"
      :columns="columns"
      :dataSource="data"
      style="margin-top:10px"
      @expand="expandedRowsChange"
    >
      <!-- :scroll="{ y: 600 }" -->
      <span slot="pro" slot-scope="text,record">{{record.name}}</span>
      <span slot="des" slot-scope="text,record">{{record.description}}</span>
      <span slot="group" slot-scope="text,record">{{record.namespace.name}}</span>
      <div slot="branch" slot-scope="text,record" :key="record.name">
        <span @click="(e)=>handleProjectChange(record.id, e)">查看</span>
      </div>
      <!-- <div slot="tags" slot-scope="text,record">
        <span v-for="tag in record.tag_list" :key="tag">{{tag}}</span>
      </div>-->
      <span
        slot="update"
        slot-scope="text,record"
      >{{m(record.last_activity_at, "YYYYMMDD").fromNow()}}</span>

      <div slot="action" slot-scope="text,record">
        <a :href="`${record.web_url}/-/archive/master/${record.name}-master.zip`">下载</a>|
        <a @click="()=>showModal(record.id)" href="javascript:void 0;">权限</a>
      </div>
      <div slot="expandedRowRender" slot-scope="record" style="margin: 0">
        <div>
          <p>创建时间: {{m(record.created_at, "YYYYMMDD").fromNow()}}</p>
          <p>所有标签: {{record.tag_list.length ? record.tag_list.join(" | ") : ""}}</p>
          <p>发布权限: [{{record.deploy}}]</p>
        </div>
      </div>
    </a-table>
    <a-modal
      title="指派发布权限"
      v-model="visible"
      @close="handleCancel"
      @cancel="handleCancel"
      @ok="handleOk"
    >
      <a-transfer
        style="width:100%;"
        :dataSource="permissionData"
        :targetKeys="targetKeys"
        showSearch
        :titles="['待分配', '已分配']"
        @change="handleChange"
        :render="item=>item.title"
      />
    </a-modal>
  </div>
</template>
<script>
import Vue from "vue";
import moment from "moment";
moment.defineLocale("zh-cn", {
  months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
    "_"
  ),
  monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
  weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
  weekdaysMin: "日_一_二_三_四_五_六".split("_"),
  longDateFormat: {
    LT: "Ah点mm分",
    LTS: "Ah点m分s秒",
    L: "YYYY-MM-DD",
    LL: "YYYY年MMMD日",
    LLL: "YYYY年MMMD日Ah点mm分",
    LLLL: "YYYY年MMMD日ddddAh点mm分",
    l: "YYYY-MM-DD",
    ll: "YYYY年MMMD日",
    lll: "YYYY年MMMD日Ah点mm分",
    llll: "YYYY年MMMD日ddddAh点mm分"
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour: function(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === "凌晨" || meridiem === "早上" || meridiem === "上午") {
      return hour;
    } else if (meridiem === "下午" || meridiem === "晚上") {
      return hour + 12;
    } else {
      // '中午'
      return hour >= 11 ? hour : hour + 12;
    }
  },
  meridiem: function(hour, minute, isLower) {
    var hm = hour * 100 + minute;
    if (hm < 600) {
      return "凌晨";
    } else if (hm < 900) {
      return "早上";
    } else if (hm < 1130) {
      return "上午";
    } else if (hm < 1230) {
      return "中午";
    } else if (hm < 1800) {
      return "下午";
    } else {
      return "晚上";
    }
  },
  calendar: {
    sameDay: function() {
      return this.minutes() === 0 ? "[今天]Ah[点整]" : "[今天]LT";
    },
    nextDay: function() {
      return this.minutes() === 0 ? "[明天]Ah[点整]" : "[明天]LT";
    },
    lastDay: function() {
      return this.minutes() === 0 ? "[昨天]Ah[点整]" : "[昨天]LT";
    },
    nextWeek: function() {
      var startOfWeek, prefix;
      startOfWeek = moment().startOf("week");
      prefix =
        this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? "[下]" : "[本]";
      return this.minutes() === 0 ? prefix + "dddAh点整" : prefix + "dddAh点mm";
    },
    lastWeek: function() {
      var startOfWeek, prefix;
      startOfWeek = moment().startOf("week");
      prefix = this.unix() < startOfWeek.unix() ? "[上]" : "[本]";
      return this.minutes() === 0 ? prefix + "dddAh点整" : prefix + "dddAh点mm";
    },
    sameElse: "LL"
  },
  ordinalParse: /\d{1,2}(日|月|周)/,
  ordinal: function(number, period) {
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return number + "日";
      case "M":
        return number + "月";
      case "w":
      case "W":
        return number + "周";
      default:
        return number;
    }
  },
  relativeTime: {
    future: "%s内",
    past: "%s前",
    s: "几秒",
    m: "1 分钟",
    mm: "%d 分钟",
    h: "1 小时",
    hh: "%d 小时",
    d: "1 天",
    dd: "%d 天",
    M: "1 个月",
    MM: "%d 个月",
    y: "1 年",
    yy: "%d 年"
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1, // Monday is the first day of the week.
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  }
});
const columns = [
  {
    title: "项目",
    dataIndex: "pro",
    key: "pro",
    // fixed: "left",
    scopedSlots: { customRender: "pro" }
  },
  {
    title: "描述",
    dataIndex: "des",
    key: "des",
    scopedSlots: { customRender: "des" }
  },
  {
    title: "属组",
    dataIndex: "group",
    key: "group",
    scopedSlots: { customRender: "group" }
  },
  {
    title: "所有分支",
    dataIndex: "branch",
    key: "branch",
    scopedSlots: { customRender: "branch" }
  },
  // {
  //   title: "所有标签",
  //   dataIndex: "tags",
  //   key: "tags",
  //   scopedSlots: { customRender: "tags" }
  // },
  {
    title: "更新时间",
    dataIndex: "update",
    key: "update",
    scopedSlots: { customRender: "update" },
    sorter: (a, b) =>
      new Date(a.last_activity_at).getTime() -
      new Date(b.last_activity_at).getTime()
  },
  // {
  //   title: "创建时间",
  //   dataIndex: "created",
  //   key: "created",
  //   scopedSlots: { customRender: "created" },
  //   sorter: (a, b) =>
  //     new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  // },
  {
    title: "操作",
    dataIndex: "",
    key: "x",
    scopedSlots: { customRender: "action" }
  }
];

export default {
  data() {
    return {
      data: [],
      columns,
      visible: false,
      targetKeys: [],
      permissionData: [],
      handleProject: null
    };
  },
  methods: {
    m(...param) {
      return moment(...param);
    },
    showModal(projectId) {
      this.visible = true;
      this.handleProject = projectId;
      this.$post("/operation/deploy/project-users", {
        id: projectId
      }).then(res => {
        if (res) {
          this.targetKeys = res.user_ids.split(",");
        }

        this.$post("/operation/gitlab/users").then(res => {
          this.permissionData = res.map((item, i) => {
            return {
              key: item.id.toString(),
              title: item.name,
              description: item.email,
              disabled: false
            };
          });
        });
      });
    },
    handleCancel() {
      this.visible = false;
      this.targetKeys = [];
      this.permissionData = [];
    },
    handleOk() {
      this.visible = false;
      // handleProject
      this.$post("/operation/deploy/set-project-users", {
        id: this.handleProject,
        users: this.targetKeys
      }).then(res => {});
    },
    handleChange(targetKeys, direction, moveKeys) {
      this.targetKeys = targetKeys;
    },
    expandedRowsChange(expanded, record) {
      console.log(expanded, record);
      if (expanded) {
        this.$post("/operation/deploy/project-users", {
          id: record.id
        }).then(res => {
          if (res) {
            record.deploy = res.user_ids;
          } else {
            record.deploy = "暂无";
          }
        });
      }
    },
    onSearch(val) {
      console.log(val);
      this.$post("/operation/gitlab/search/projects", {
        name: val
      }).then(res => {
        console.log(res);
        if (res) {
          this.data = res.map(item => {
            item.deploy = "";
            return item;
          });
        }
      });
    },
    checkBranch() {},
    handleUserChange(value) {
      console.log(value);
      this.$post("/operation/gitlab/user-projects", {
        id: value
      }).then(res => {
        this.currentProject = "";
        this.userprojects = res;
      });
    },
    handleProjectChange(value, e) {
      console.log(value, e);
      this.$post("/operation/gitlab/project-branchs", {
        id: value
      }).then(res => {
        this.branchs = res;
        let branchs = res.map(item => {
          return item.name;
        });
        e.target.innerHTML = branchs.join("|");
      });
    }
  }
};
</script>
<style lang="less" scoped>
.gitlab-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}
</style>
