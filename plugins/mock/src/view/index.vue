<template>
  <div>
    <a-input-group compact>
      <a-input v-model="name" style="width:100px;" placeholder="字段"/>
      <a-input v-model="initNo" style="width:100px;" placeholder="初始值"/>
      <a-select style="min-width:100px;" :defaultValue="currentType" @change="changeType">
        <a-select-option
          :value="types.type"
          v-for="types of valTypes"
          :key="types.type"
        >{{types.type}}</a-select-option>
      </a-select>

      <a-select style="min-width:130px;" v-model="currentRule">
        <a-select-option :value="r" v-for="(r,index) in rules" :key="index">{{r}}</a-select-option>
      </a-select>
      <a-input v-if="isNeedNo" v-model="rule" style="width:100px;" placeholder="模板值"/>
    </a-input-group>

    <a-row :gutter="24">
      <a-col :span="12">
        <a-card title="模板" :bordered="false">
          <pre>{{mockObject}}</pre>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="结果" :bordered="false">
          <pre>{{mockTel}}</pre>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import MockJs from "mockjs";
export default {
  name: "mock",
  data() {
    return {
      name: "",
      rule: "",
      initNo: "",
      isNeedNo: true,
      currentType: "String",
      currentRule: "min-max",
      mockObject: "",
      rules: [
        "min-max",
        "count"
        // "min-max.dmin-dmax",
        // "min-max.dcount",
        // "count.dmin-dmax",
        // "count.dcount",
        // "+step"
      ],
      valTypes: [
        {
          type: "String",
          rules: ["min-max", "count"]
        },
        {
          type: "Number",
          rules: ["+1", "min-max", "min-max.dmin-dmax"]
        },
        {
          type: "Boolean",
          rules: ["1", "min-max"]
        },
        {
          type: "Object",
          rules: ["min-max", "count"]
        },
        {
          type: "Array",
          rules: ["1", "+1", "min-max", "count"]
        },
        {
          type: "Function",
          rules: ["function"]
        },
        {
          type: "RegExp",
          rules: ["regexp"]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    changeType(val) {
      if (this.currentType !== val) {
        this.currentType = val;

        if (["RegExp", "Function"].indexOf(val) > -1) {
          this.isNeedNo = false;
        } else {
          this.isNeedNo = true;
        }
        this.valTypes.forEach(types => {
          if (types.type === val) {
            this.currentRule = types.rules[0];
            this.rules = types.rules;

            console.log(this.currentRule, this.rules);
          }
        });
      }
    }
  },

  computed: {
    mockTel() {
      if (this.name && this.initNo && (!this.isNeedNo || this.rule)) {
        let completed = true;
        let value = undefined;
        if (["Object", "Function", "RegExp"].indexOf(this.currentType) > -1) {
          try {
            value = new Function(`return ${this.initNo}`)();
          } catch (error) {
            completed = false;
          }
        } else {
          value = this.initNo;
        }

        if (completed) {
          let obj = {};
          if (!this.isNeedNo) {
            obj = {
              [`${this.name}`]: value
            };
          } else {
            obj = {
              [`${this.name}|${this.rule}`]: value
            };
          }
          this.mockObject = JSON.stringify(obj, null, "\t");
          let ret = MockJs.mock(obj);

          return JSON.stringify(ret, null, "\t");
        } else {
          return "未完成";
        }
      } else {
        return "未完成";
      }
    }
  }
};
</script>
