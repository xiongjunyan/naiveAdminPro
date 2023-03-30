<template>
  <div>
    counter:{{ counter }}
    <br />
    double:{{ double }}
    <br />
    <n-button @click="counterStore.increment">增加</n-button>
    <n-button @click="counterStore.decrement">减少</n-button>
  </div>
  登录页面
</template>

<script lang="ts" setup>
const counterStore = useCounter()
const { counter, double } = storeToRefs(counterStore)
</script>

<style scoped></style>
