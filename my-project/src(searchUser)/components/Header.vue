<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" 
        v-model.trim="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>


<script>
export default {
  name: 'Search',
  data () {
    return {
      searchName: '', // 搜索的用户名关键字
    }
  },

  methods: {
    search () {
      const {searchName} = this
      if (searchName) {
        // 触发异步搜索的action调用
        this.$store.dispatch('search', searchName)
        // 清除输入
        this.searchName = ''
      }
    }
  }
}
</script>
<style scoped></style>
