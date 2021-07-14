export default{
    handelEnter({commit,state},title){
        if(!title.trim()){
            return;
        }
        commit("addTodo",title.trim());
    },
    
    confirmDelete ({commit,state},index) {
        if (confirm(`确定要删除吗?`)) {
            commit('deleteTodo', index)
        }
    },
    
    
}