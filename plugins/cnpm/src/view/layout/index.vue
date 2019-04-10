<template>
  <div class="scroll-body">
    <header class="header">
      <center>
        <nav class="search-inner">
          <a-auto-complete
            class="global-search"
            size="large"
            style="width: 100%"
            :allowClear="true"
            @select="onSelect"
            @search="handleSearch"
            placeholder="search"
            optionLabelProp="text"
          >
            <template slot="dataSource">
              <a-select-option
                v-for="item in dataSource"
                :key="item.category"
                :text="item.category"
              >
                {{item.query}} 在
                <a
                  :href="`/#/cnpm/search?q=${item.query}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{item.category}}</a>
              </a-select-option>
            </template>
            <a-input>
              <a-button slot="suffix" class="search-btn" size="large">Search</a-button>
            </a-input>
          </a-auto-complete>
        </nav>
      </center>
    </header>
    <div class="content">
      <transition name="fade" mode="out-in">
        <component :is="view"></component>
      </transition>
    </div>
  </div>
</template>
<script>
import index from "../index";
import search from "../search";
import pkg from "../pkg";
export default {
  nane: "StartPage",
  components: { index, search, package: pkg },
  props: {
    view: {
      type: String,
      default: "index"
    }
  },
  data() {
    return {
      dataSource: []
    };
  },
  mounted() {
    console.log(this.view);
  },
  methods: {
    onSelect(value) {
      console.log("onSelect", value);
    },

    handleSearch(value) {
      this.dataSource = value ? this.searchResult(value) : [];
      window.location.hash = "/cnpm/search?q=" + value;
    },

    getRandomInt(max, min = 0) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    searchResult(query) {
      return new Array(this.getRandomInt(5))
        .join(".")
        .split(".")
        .map((item, idx) => ({
          query,
          category: `${query}${idx}`,
          count: this.getRandomInt(200, 100)
        }));
    }
  }
};
</script>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

div,
p,
center {
  box-sizing: border-box;
}

.scroll-body {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  overflow: hidden;
}

.header {
  // background: white;
  // box-shadow: 0 4px 13px -3px rgba(0, 0, 0, 0.10196);
  // border-bottom: 1px solid #d2d2d2;
  position: absolute;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 1rem 0;
  .logo {
    display: inline-block;
    width: 100px;
    height: 16px;
    padding: 5px 16px;
  }
  .search-inner {
    display: inline-block;
    vertical-align: text-bottom;
    height: 40px;
    width: 50%;
  }
}

.content {
  margin-top: 55px;
  background: #f6f6f6;
  min-height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  .inner-content {
    max-width: 80%;
    margin: 0 auto;
    background: white;
    // padding: 1rem;
  }
}

@media only screen and (max-width: 767px) {
  .search-inner {
    width: 100% !important;
  }
  .logo {
    height: 33px !important;
    display: block !important;
  }
  .header {
    height: 95px;
  }

  .content {
    margin-top: 90px !important;
  }
}

.global-search-wrapper {
  padding-right: 50px;
}

.global-search.ant-select-auto-complete
  .ant-input-affix-wrapper
  .ant-input:not(:last-child) {
  padding-right: 62px;
}

.global-search.ant-select-auto-complete
  .ant-input-affix-wrapper
  .ant-input-suffix {
  right: 0;
}

.global-search.ant-select-auto-complete
  .ant-input-affix-wrapper
  .ant-input-suffix
  button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.ant-select-selection__clear {
  right: 100px;
}

.global-search-item-count {
  position: absolute;
  right: 16px;
}
</style>

