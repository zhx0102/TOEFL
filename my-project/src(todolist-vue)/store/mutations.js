export default {
    addTodo(state, title) {
        state.todo = {
            id: Date.now(),
            title: title,
            select: false
        };
        state.todos.unshift(state.todo);
    },
    deleteTodo(state, index) {
        state.todos.splice(index, 1);
    },
    totalSelect(state, item) {
        item.select = !item.select;
    },
    selectAll(state, value) {
        // console.log(value);
        state.todos.forEach(item => {
            item.select = value;
        })
    },
    deleteSelectAll(state){
        state.todos = state.todos.filter(todo =>!todo.select)
    }
}