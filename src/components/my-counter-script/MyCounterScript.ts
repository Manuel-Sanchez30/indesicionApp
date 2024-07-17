import { ref, computed } from 'vue';

interface Props {
  value: number;
}

const props = defineProps<Props>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);
