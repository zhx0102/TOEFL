<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          v-model="message"
          class="form-control"
          rows="6"
          placeholder="评论内容"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button @click="getMessage" type="button" class="btn btn-default pull-right">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "LeftUserComment",
  props: {
    addMessage: Function,
    contents: Array,
  },
  data() {
    return {
      name: "", //用户名
      message:"",//评论
    };
  },
  methods:{
      //收集信息返回的函数
      getMessage(){
          const {name,message}=this;
          if(!name.trim() || !message.trim()){
          this.message="";
              this.name="";
              return;
          }
          this.addMessage(name.trim(),message.trim());
          //回车后清空
          this.name="";
          this.message="";
      }
  }
};
</script>
<style scoped></style>
