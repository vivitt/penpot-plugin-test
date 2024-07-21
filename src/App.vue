<script setup lang="ts">
import { onMounted } from 'vue'
import { signal } from 'vue-signals'

const theme = signal<string | null>(null)

onMounted(() => {
  const url = new URL(window.location.href)

  const initialTheme = url.searchParams.get('theme')

  if (initialTheme) {
    theme.set(initialTheme as string)
  }

  window.addEventListener('message', (event) => {
    if (event.data.type === 'theme') {
      theme.set(event.data.content)
    }
  })
})
</script>

<template>
  <main :data-theme="theme()">
    <h2>Fluid Forms</h2>
    <div class="forms">
      <div>✱</div>
      <div>◆</div>
      <div>▲</div>
      <div>●</div>
      <div>◼︎</div>
    </div>
  </main>
</template>

<style lang="less">
[data-theme='dark'] {
  /** Dark styles */
  color: violet;
}

[data-theme='light'] {
  /** Light styles */
  color: red;
}

.forms {
  display: flex;
  div {
    border: 1px solid black;
    padding: 1em;
  }
}
</style>
