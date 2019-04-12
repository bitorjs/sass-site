<template>
  <div class="td-container">
    <a-input-group compact style="display: flex;flex-direction: row;">
      <a-tree-select
        style="flex:1;"
        showSearch
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        @change="onChangeFormat"
        v-model="format"
      >
        <a-tree-select-node
          :title="d.format"
          :value="d.name"
          v-for="d in options"
          :key="`2_${d.name}`"
        ></a-tree-select-node>
      </a-tree-select>
      <a-input v-model="args" style="width:100px;" @change="onChangeArgs" placeholder="参数"/>
    </a-input-group>
    <p class="tip">{{tip}}</p>
  </div>
</template>
<script>
export default {
  name: "mock-dtd",
  data() {
    return {
      tip: "",
      format: "",
      args: null,
      options: [
        // Basic
        {
          name: "@boolean",
          format: "boolean( min?, max?, current? )",
          des: "返回一个随机的布尔值"
        },
        {
          name: "@natural",
          format: "natural( min?, max? )",
          des: "返回一个随机的自然数（大于等于 0 的整数）"
        },
        {
          name: "@integer",
          format: "integer( min?, max? )",
          des: "返回一个随机的整数"
        },
        {
          name: "@float",
          format: "float( min?, max?, dmin?, dmax? )",
          des: "返回一个随机的浮点数"
        },
        {
          name: "@character",
          format: "character( pool? )",
          des: "返回一个随机字符"
        },
        {
          name: "@string",
          format: "string( pool?, min?, max? )",
          des: "返回一个随机字符串"
        },
        {
          name: "@range",
          format: "range( start?, stop, step? )",
          des: "返回一个整型数组"
        },
        // Date
        {
          name: "@date",
          format: "date( format? )",
          des: "返回一个随机的日期字符串"
        },
        {
          name: "@time",
          format: "time( format? )",
          des: "返回一个随机的时间字符串"
        },
        {
          name: "@datetime",
          format: "datetime( format? )",
          des: "返回一个随机的日期和时间字符串"
        },
        {
          name: "@now",
          format: "now( unit?, format? )",
          des: "返回当前的日期和时间字符串"
        },
        // Image
        {
          name: "@image",
          format: "image( size?, background?, foreground?, format?, text? )",
          des: "生成一个随机的图片地址 "
        },
        {
          name: "@dataImage",
          format: "dataImage( size?, text? )",
          des: "生成一段随机的 Base64 图片编码"
        },
        // Color
        {
          name: "@color",
          format: "color()",
          des: "随机生成一个有吸引力的颜色，格式为 '#RRGGBB'"
        },
        {
          name: "@hex",
          format: "hex()",
          des: "随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。"
        },
        {
          name: "@rgb",
          format: "rgb()",
          des: "随机生成一个有吸引力的颜色，格式为 'rgb(r, g, b)'"
        },
        {
          name: "@rgba",
          format: "rgba()",
          des: "随机生成一个有吸引力的颜色，格式为 'rgba(r, g, b, a)'"
        },
        {
          name: "@hsl",
          format: "hsl()",
          des: "随机生成一个有吸引力的颜色，格式为 'hsl(h, s, l)'"
        },
        // Text
        {
          name: "@paragraph",
          format: "paragraph( min?, max? )",
          des: "随机生成一段文本"
        },
        {
          name: "@cparagraph",
          format: "cparagraph( min?, max? )",
          des: "随机生成一段中文文本"
        },
        {
          name: "@sentence",
          format: "sentence( min?, max? )",
          des: "随机生成一个句子，第一个单词的首字母大写"
        },
        {
          name: "@csentence",
          format: "csentence( min?, max? )",
          des: "随机生成一段中文文本"
        },
        {
          name: "@word",
          format: "word( min?, max? )",
          des: "随机生成一个单词"
        },
        {
          name: "@cword",
          format: "cword( pool?, min?, max? )",
          des: "随机生成一个汉字"
        },
        {
          name: "@title",
          format: "title( min?, max? )",
          des: "随机生成一句标题，其中每个单词的首字母大写"
        },
        {
          name: "@ctitle",
          format: "ctitle( min?, max? )",
          des: "随机生成一句中文标题"
        },
        // Name
        { name: "@first", format: "first()", des: " 随机生成一个常见的英文名" },
        { name: "@last", format: "last()", des: "随机生成一个常见的英文姓" },
        {
          name: "@name",
          format: "name( middle? )",
          des: "随机生成一个常见的英文姓名"
        },
        {
          name: "@cfirst",
          format: "cfirst()",
          des: "随机生成一个常见的中文名"
        },
        { name: "@clast", format: "clast()", des: "随机生成一个常见的中文姓" },
        {
          name: "@cname",
          format: "cname()",
          des: "随机生成一个常见的中文姓名"
        },
        // Web
        {
          name: "@url",
          format: "url( protocol?, host? )",
          des: "随机生成一个 URL"
        },
        {
          name: "@protocol",
          format: "protocol()",
          des: "随机生成一个 URL 协议"
        },
        { name: "@domain", format: "domain()", des: "随机生成一个域名" },
        {
          name: "@tld",
          format: "tld()",
          des: "随机生成一个顶级域名（Top Level Domain）"
        },
        {
          name: "@email",
          format: "email( domain? )",
          des: "随机生成一个邮件地址"
        },
        { name: "@ip", format: "ip()", des: "随机生成一个 IP 地址 Address" },
        {
          name: "@region",
          format: "region()",
          des: "随机生成一个（中国）大区"
        },
        {
          name: "@province",
          format: "province()",
          des: "随机生成一个（中国）省（或直辖市、自治区、特别行政区）"
        },
        {
          name: "@city",
          format: "city( prefix? )",
          des: "随机生成一个（中国）市"
        },
        {
          name: "@county",
          format: "county( prefix? )",
          des: "随机生成一个（中国）县"
        },
        {
          name: "@zip",
          format: "zip()",
          des: "随机生成一个邮政编码（六位数字）"
        },
        // Helper
        {
          name: "@capitalize",
          format: "capitalize( word )",
          des: "把字符串的第一个字母转换为大写"
        },
        { name: "@upper", format: "upper( str )", des: "把字符串转换为大写" },
        { name: "@lower", format: "lower( str )", des: "把字符串转换为小写" },
        {
          name: "@pick",
          format: "pick( arr )",
          des: "从数组中随机选取一个元素，并返回"
        },
        {
          name: "@shuffle",
          format: "shuffle( arr )",
          des: "打乱数组中元素的顺序，并返回 Miscellaneous"
        },
        { name: "@guid", format: "guid()", des: "随机生成一个 GUID" },
        { name: "@id", format: "id()", des: "随机生成一个 18 位身份证" },
        {
          name: "@increment",
          format: "increment( step? )",
          des: "生成一个全局的自增整数"
        }
      ]
    };
  },
  methods: {
    onChangeArgs(args) {
      if (this.format) {
        this.$emit("change", {
          template: `${this.format}(${this.args || ""})`
        });
      }
    },
    onChangeFormat(format) {
      if (format) {
        this.args = "";
        this.$emit("change", {
          template: `${format}(${this.args || ""})`
        });
        this.options.forEach(item => {
          if (item.name === format) {
            this.tip = item.des;
          }
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.td-container {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  .tip {
    text-align: right;
    color: #cccccc;
  }
}
</style>
