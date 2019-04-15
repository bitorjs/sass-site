<template>
  <div class="list-container">
    <a-list itemLayout="vertical" :pagination="pagination" :dataSource="listData">
      <div slot="footer">
        共搜索到
        <b>{{listData.length}}</b> 篇类似文章
      </div>
      <a-list-item slot="renderItem" slot-scope="item, index" :key="`${item.title}_${index}`">
        <img
          slot="extra"
          width="272"
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        >
        <a-list-item-meta :description="item.description">
          <a slot="title" :href="`#/wiki/detail/${item.href}`">{{item.title}}</a>
        </a-list-item-meta>
        {{item.content}}
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
export default {
  name: "wiki-list",
  props: {
    contentType: String
  },
  data() {
    return {
      listData: [],
      pagination: {
        onChange: page => {
          console.log(page);
          this.pagination.current = page;
        },
        pageSize: 10
      }
    };
  },
  mounted() {
    this.getList(this.contentType);
  },
  methods: {
    getList(n) {
      this.$get("/wiki/list", {
        type: n
      }).then(res => {
        console.log(res);
        this.listData = res;
      });
    }
  },
  watch: {
    contentType(n, o) {
      console.log(n, o);
      this.pagination.current = 1;
      this.getList(n);
    }
  }
};
</script>
<style lang="less" scoped>
.list-container {
  padding: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}
</style>

