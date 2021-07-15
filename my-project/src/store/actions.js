export default{
    addTodo({commit,state},title){
        if(!title.trim()){
            return;
        }
        state.todo={id:Date.now(),title:title.trim(),select:false}
        commit("addTodo")
    },
    deleteTodo({commit,state},index){
        if(confirm('你确定删除吗？')){
            commit('deleteTodo',index)
        }
    },
}