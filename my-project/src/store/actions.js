import axios from 'axios'
export default {
    async search({
        commit
    }, searchName) {
        commit("REQUESTING")
        try {
            const response = await axios.get("https://api.github.com/search/users", {
                params: {
                    q: searchName
                }
            })
            const data = response.data;
            //   console.log(data);
            const users = data.items.map(item => ({
                name: item.login,
                avatar_url: item.avatar_url,
                url: item.html_url
            }))
            commit('REQ_SUCCESS', {users})
        } catch (error) {
            commit('REQ_ERROR', {errorMsg: error.message})
        }

    }
}