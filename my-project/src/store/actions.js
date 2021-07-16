export default {
    addTodo({commit,state},title){
        //判断如果todo里输入的是空串或空格，都return
        const title2=title.trim();
        if(!title2){
            return;
        }
        commit('addTodo',title2)
    },
    deleteTodo({commit,state},index){
        if(confirm('请问确定要删除吗？')){
            commit('deleteTodo',index);
        }
    }
}