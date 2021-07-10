<template>
  <li class="list-group-item">
    <div class="handle">
      <a @click="deleteMsg">删除</a>
    </div>
    <p class="user">
      <span>{{ item.userName }}</span
      ><span>说:</span>
    </p>
    <p class="centence">{{ item.comment }}</p>
  </li>
</template>
<script>
export default {
  name: "Item",
  props: {
    item: Object,
    deleteMessage: Function,
    index: Number,
    allMsgCount:Function
  },
  methods: {
    deleteMsg(event) {
      if (confirm(`是否确定删除${this.item.userName}的评论吗？`)) {
        this.deleteMessage(this.index);
      }
      this.allMsgCount();
    },
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
