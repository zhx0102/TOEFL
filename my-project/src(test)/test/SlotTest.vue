<template>
  <div>
    <h2>SlotTest组件</h2>
    <slot name="first"></slot>
    <p>其它内容</p>
    <slot name="second"></slot>
    <p>其它内容222</p>
    <slot>
      <span>默认内容</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'SlotTest',
}
</script>

<style scoped>

</style>
