export default {
    addTodo(state,title){
        //动态往todos里面添加todo
        state.todo={id:Date.now(),title,select:false};
        state.todos.unshift(state.todo);
    },
    deleteTodo(state,index){
        state.todos.splice(index,1);
    },
    isCheck(state,item){
        item.select=!item.select;
    },
    AllCheck(state){
        state.todos.forEach(todo => {
            todo.select=!todo.select;
        });
    },
    deleteSelectAll(state){
        const arr = state.todos.filter(todo=>!todo.select);
        console.log(arr);
        state.todos=arr;
    }
}