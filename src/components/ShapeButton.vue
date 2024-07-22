<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['shape', 'path'])

const buttonIcon = ref(`
      ${props.path}
      <defs>
        <linearGradient
          id="paint0_linear_268_13"
          x1="685.898"
          y1="579.837"
          x2="697.274"
          y2="-44.8577"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E35E13" />
          <stop offset="1" stop-color="#A981FE" />
          <stop offset="1" stop-color="#FFB661" stop-opacity="0" />
        </linearGradient>
      </defs>
    `)
</script>

<template>
  <button v-html="props.path"></button>
</template>

<style lang="less"></style>
