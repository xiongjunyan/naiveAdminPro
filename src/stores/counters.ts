export const useCounter = defineStore('counter', () => {
  const counter = ref(0) //state
  const increment = () => counter.value++ //action
  const decrement = () => counter.value--
  const double = computed(() => counter.value * 2) //getter
  return {
    counter,
    increment,
    decrement,
    double
  }
})
