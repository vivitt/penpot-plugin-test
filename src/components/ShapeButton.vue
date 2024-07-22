<script setup lang="ts">
const props = defineProps(['shape', 'path'])
</script>

<template>
  <button v-html="props.path"></button>
</template>
