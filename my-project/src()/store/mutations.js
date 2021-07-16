export default{
    addTodo(state){
        console.log(state.todo);
        state.todos.unshift(state.todo);
    },
    deleteTodo(state,index){
        state.todos.splice(index,1);
    },
    isCheck(state,item){
        item.select=!item.select;
    }
}