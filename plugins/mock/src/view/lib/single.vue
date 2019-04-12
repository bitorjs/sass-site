<template>
  <div class="single-container" :style="style">
    <a-input-group compact>
      <a-input class="auto" v-model="name" style="width:100px;" placeholder="字段"/>
      <a-input class="auto" v-model="initNo" style="width:100px;" placeholder="初始值"/>
      <a-select style="min-width:80px;" :defaultValue="currentType" @change="changeType">
        <a-select-option
          :value="types.type"
          v-for="types of valTypes"
          :key="types.type"
        >{{types.type}}</a-select-option>
      </a-select>
      <a-input v-if="isNeedNo" v-model="rule" style="width:80px;" placeholder="模板值"/>
    </a-input-group>
    <p hidden v-if="mockTel"></p>
    <p class="tip">{{rules.toString()}}</p>
  </div>
</template>
<script>
import MockJs from "mockjs";

export default {
  name: "mock-single",
  data() {
    return {
      style: "",
      name: "字段",
      rule: "",
      initNo: "",
      isNeedNo: true,
      currentType: "String",
      currentRule: "min-max",
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
        if (
          [
            "Object",
            "Function",
            "RegExp",
            "Array",
            "Boolean",
            "Number"
          ].indexOf(this.currentType) > -1
        ) {
          try {
            value = new Function(`return ${this.initNo}`)();
          } catch (error) {
            completed = false;
          }
        } else {
          value = this.initNo;
        }

        if (completed) {
          let key = this.isNeedNo
              ? `${this.name}|${this.rule}`
              : `${this.name}`,
            obj = {
              [key]: value
            };

          let ret = MockJs.mock(obj);

          this.$emit("change", {
            str: {
              [key]:
                ["RegExp", "Function"].indexOf(this.currentType) > -1
                  ? value.toString()
                  : value
            },
            template: obj,
            result: ret,
            name: this.name,
            initial: this.initNo,
            type: this.currentType,
            rule: this.rule
          });
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
<style lang="less" scoped>
.single-container {
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  .ant-input-group-compact {
    display: flex;

    .auto {
      flex: 1;
    }
  }

  .tip {
    text-align: right;
    color: #cccccc;
  }
}
</style>

