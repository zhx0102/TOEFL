<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="isShowMsg">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item
        :allMsgCount="allMsgCount"
        v-for="(item, index) in contents"
        :key="item.id"
        :item="item"
        :deleteMessage="deleteMessage"
        :index="index"
      />
    </ul>
  </div>
</template>
<script>
import Item from "./Item.vue";
export default {
  name: "RightShowComment",
  props: {
    contents: Array,
    deleteMessage: Function,
  },
  components: {
    Item,
  },
  methods: {
    allMsgCount() {
    //   console.log(this.contents.length);
      //计算评论总数，如果没有了，则显示提示文本
      if (!this.contents.length) {
        this.isShowMsg = true;
      }
    },
  },
  data() {
    return {
      isShowMsg: false,
    };
  },
};
</script>
<style scoped>
.reply {
  margin-top: 0px;
}

li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
