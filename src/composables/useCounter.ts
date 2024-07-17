import { ref, computed } from 'vue';

export const useCounter = (value: number) => {
  const counter = ref(value);
  const squareCounter = computed(() => counter.value * counter.value);

  return {
    counter,
    squareCounter,
  };
};
