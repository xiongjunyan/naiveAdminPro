<template>
  <div>
    counter:{{ counter }}
    <br />
    double:{{ double }}
    <br />
    <n-button @click="counterStore.increment">增加</n-button>
    <n-button @click="counterStore.decrement">减少</n-button>
  </div>
</template>

<script lang="ts" setup>
const counterStore = useCounter()
//对counter进行解构,pinia中的counterStore无法直接进行转化,
const { counter, double } = storeToRefs(counterStore)
</script>

<style scoped></style>
