<template>
  <div class="list-container">
    <a-list itemLayout="vertical" :pagination="pagination" :dataSource="listData">
      <div slot="header">
        共搜索到
        <b>{{listData.length}}</b> 篇文章
      </div>
      <div slot="footer">
        共搜索到
        <b>{{listData.length}}</b> 篇文章
      </div>
      <a-list-item slot="renderItem" slot-scope="item, index" :key="`${item.title}_${index}`">
        <template slot="actions">
          <span>
            <a-icon :type="'star-o'" style="margin-right: 8px"/>
            {{item.star}}
            <a-icon :type="'like-o'" style="margin-right: 8px"/>
            {{item.view}}
            <a-icon :type="'message'" style="margin-right: 8px"/>1
          </span>
        </template>
        <a-list-item-meta>
          <a slot="title" :href="`#/wiki/detail/${item.href}`">{{item.title}}</a>
          <p slot="description" class="keyword">
            <span v-for="keyword in item.keywords" :key="keyword">{{keyword}}</span>
          </p>
        </a-list-item-meta>
        {{item.summary}}
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
        },
        pageSize: 10,
        position: "both"
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

  .keyword {
    span {
      color: #5d5d5d;
      background-color: rgba(0, 0, 0, 0.1);
      margin-right: 10px;
      padding: 5px 10px;
      border-radius: 2px;
      font-size: 12px;
    }
  }
}
</style>

