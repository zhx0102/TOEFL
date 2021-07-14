export default{
    allCheck(state){
        const arr  = state.todos.reduce((pre,todo)=>{
            return pre+=todo.select?1:0;
        },0)
        return arr;
    },
    allSelect(state,getters){
        return state.todos.length === getters.allCheck && getters.allCheck>0
    }
}