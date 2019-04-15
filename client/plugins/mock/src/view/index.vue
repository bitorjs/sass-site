<template>
<div>
  <head>http://mockjs.com/examples.html#</head>
  <single style="width:400px;" @change="singleChange"></single>
  <a-row :gutter="24">
    <a-col :span="12">
      <a-card title="Data Template" :bordered="false">
        <pre>{{mockObject}}</pre>
      </a-card>
    </a-col>
    <a-col :span="12">
      <a-card title="Result" :bordered="false">
        <pre>{{mockTel}}</pre>
      </a-card>
    </a-col>
  </a-row>

  <dtd style="width:400px;" @change="onChange"></dtd>
  <a-row :gutter="24">
    <a-col :span="12">
      <a-card title="Data Template" :bordered="false">
        <pre>{{mock2Object}}</pre>
      </a-card>
    </a-col>
    <a-col :span="12">
      <a-card title="Result" :bordered="false">
        <pre>{{mock2Tel}}</pre>
      </a-card>
    </a-col>
  </a-row>
</div>
</template>
<script>
import single from "./lib/single";
import dtd from "./lib/dtd";
import MockJs from "mockjs";
export default {
  name: "mock",
  components: { single, dtd },
  data() {
    return {
      mockObject: "",
      fixedDtd: "",
      mock2Object: "",
      mockTel: ""
    };

    // Mock.Random.extend() 扩展符...
    // Random.extend({
    //     constellation: function(date) {
    //         var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    //         return this.pick(constellations)
    //     }
    // })
    // Random.constellation()
    // // => "水瓶座"
    // Mock.mock('@CONSTELLATION')
    // // => "天蝎座"
    // Mock.mock({
    //     constellation: '@CONSTELLATION'
    // })
    // // => { constellation: "射手座" }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    onChange(val) {
      console.log(val);
      this.mock2Object = val.template;
    },
    singleChange(val) {
      console.log(val);
      this.mockObject = val.str;
      this.mockTel = val.result;
    }
  },

  computed: {
    mock2Tel() {
      return MockJs.mock(this.mock2Object);
    }
  }
};
</script>
