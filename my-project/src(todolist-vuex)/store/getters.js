export default {
    //计算选中的todo个数
    allSelectCount(state){
        const count = state.todos.reduce((pre,todo) =>{
            return pre+=todo.select?1:0;
        },0);
        return count;
    },
    // todos的总长度
    TodoCount(state){
        return state.todos.length;
    },
    isAllSelect(state,getters){
        return getters.allSelectCount===getters.TodoCount&&getters.TodoCount>0
    }
}