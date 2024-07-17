<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
  </section>

  <div>
    <button class="btn" @click="counter--">-1</button>
    <button class="btn" @click="counter++">+1</button>
  </div>
</template>

<script lang="ts" setup>
//import { ref, computed } from 'vue';
import { useCounter } from '../composables/useCounter';

interface Props {
  value: number;
}

const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(20);

/* let counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value); */
</script>

<style scoped>
.btn {
  @apply bg-indigo-500 cursor-pointer rounded-md p-1 hover:bg-indigo-800 hover:text-white m-1 font-semibold;
}
</style>
