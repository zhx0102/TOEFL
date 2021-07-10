<template>
    <div class="container">
        <LeftUserComment :addMessage="addMessage" :contents="contents"/>
        <RightShowComment :contents="contents" :deleteMessage="deleteMessage"/>
    </div>
</template>
<script>
import LeftUserComment from "./LeftUserComment.vue"
import RightShowComment from "./RightShowComment.vue"
export default {
  name: "Container",
  methods:{
      addMessage(name,message){
          //添加用户评论函数
        // console.log(name,message);
        const userObj={id:Date.now(),userName:name,comment:message};
        this.contents.unshift(userObj);
      },
      deleteMessage(index){
          //删除用户评论
        //   console.log(index);
        this.contents.splice(index,1);
      },
      
  },
  data(){
      return{
          contents:[]
         
      }
  },
   watch: {
    contents: {
      handler(value) {
        localStorage.setItem("contents_key", JSON.stringify(value));
      },
      deep: true, //深度监视
    },
  },
  mounted() {
    setTimeout(() => {
      this.contents = JSON.parse(localStorage.getItem("contents_key")) || [];
    }, 2000);
  },
  components:{
      LeftUserComment,
      RightShowComment
  },
  
};
</script>
<style scoped></style>
