<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import { signal } from 'vue-signals'

// const theme = signal<string | null>(null)
const theme = ref<string | null>(null)

onMounted(() => {
  const url = new URL(window.location.href)

  const initialTheme = url.searchParams.get('theme')

  if (initialTheme) {
    theme.value = initialTheme
  }

  window.addEventListener('message', (event) => {
    if (event.data.type === 'theme') {
      console.log(event.data.content)
      theme.value = event.data.content
    }
  })
})
</script>

<template>
  <main :data-theme="theme">
    <h2>Textured Shapes</h2>
    <div class="forms">
      <button>✱</button>
      <button>◆</button>
      <button>▲</button>
      <button>●</button>
      <button>◼︎</button>
    </div>
  </main>
</template>

<style lang="less">
main {
  border: red 1px solid;
  margin: 0;
}
[data-theme='dark'] {
  /** Dark styles */

  color: #7efff5;
  background-color: #18181a;
}

[data-theme='light'] {
  /** Light styles */
  color: #6911d4;
}

.forms {
  display: flex;
  div {
    border: 1px solid black;
    padding: 1em;
  }
}
</style>
