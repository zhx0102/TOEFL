<template>
  <div>
    <h2>{{name}} +++ {{myAge}}</h2>
  </div>
</template>

<script>
export default {
  name: 'PropsTest',
  // 声明接收
  // props: ['name', 'myAge'],  // 简单写法: 只指定名称
  
  // props: { // 中等复杂度写法: 指定名称和值的类型
  //   name: String,
  //   myAge: Number
  // },

  props: { // 完整写法: 指定名称/类型/必要性/校验
    name: {
      type: String,
      required: true,
    },
    myAge: {
      type: Number, // 类型
      default: 0, // 默认值
      validator: function (value) { // 对属性值进行校验
        return value >= 0
      }
    }
  },

  created() {
    // 所有的data与props中的属性在组件对象上都有对应的属性
    console.log(this) // this是当前组件的组件实例对象
  }
}
</script>

<style scoped>

</style>
