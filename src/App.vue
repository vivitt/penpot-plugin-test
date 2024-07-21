<script setup lang="ts">
import { onMounted, ref } from 'vue'

const SHAPES = [
  {
    name: 'star',
    svg: `<svg height="210" width="500" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 40,198 190,78 10,78 160,198"
  style="fill:lime;stroke:purple;stroke-width:5;" />
</svg>`
  },
  {
    name: 'circle',
    svg: `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <circle r="45" cx="50" cy="50" fill="red" />
</svg>`
  }
]
const theme = ref<string | null>(null)

function sendMessage(message: unknown): void {
  parent.postMessage(message, '*')
}

const insert = (key): void => {
  if (key) {
    const shape = SHAPES.filter((sh) => sh.name === key)[0]

    sendMessage({
      type: 'insert-shape',
      content: {
        svg: shape.svg,
        name: shape.name
      }
    })
  }
}

onMounted(() => {
  const url = new URL(window.location.href)

  const initialTheme = url.searchParams.get('theme')

  if (initialTheme) {
    theme.value = initialTheme
  }

  window.addEventListener('message', (event) => {
    if (event.data.type === 'theme') {
      theme.value = event.data.content
    }
  })
})
</script>

<template>
  <main :data-theme="theme">
    <h2>Textured Shapes</h2>
    <div class="forms">
      <button @click="() => insert('star')">✱</button>
      <button>◆</button>
      <button>▲</button>
      <button @click="() => insert('circle')">●</button>
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
