export default {
    selectAllLength(state) {
        const len = state.todos.reduce((pre, item) => {
            return pre += item.select ? 1 : 0;
        }, 0);
        return len;
    },
    isAllChecked(state,getters){
        return state.todos.length===getters.selectAllLength && getters.selectAllLength>0;
    }
}