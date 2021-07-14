<template>
<div>
    <h1>count:{{count}},count is {{eventOrOdd}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addIsOdd">is Odd add</button>
    <button @click="addAsync">add async</button>
</div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:"App",
    computed:{
        // count(){
        //     return this.$store.state.count;
        // },
        // eventOrOdd(){
        //     return this.$store.getters.eventOrOdd;
        // }
    ...mapState({
        count:'count'
    }),
    ...mapGetters(['eventOrOdd'])

    },
    methods:{
        // add(){
        //     this.$store.commit("add")
        // },
        // sub(){
        //     this.$store.commit("sub")
        // },
        // addIsOdd(){
        //     this.$store.dispatch("addIsOdd")
        // },
        // addAsync(){
        //     this.$store.dispatch("addAsync")
        // }
        ...mapMutations({
            add:"add",
            sub:"aub"
        }),
        ...mapActions(['addIsOdd','addAsync'])
    }
}
</script>
<style  scoped>
</style>