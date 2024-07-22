<script setup lang="ts">
import ShapeButton from './components/ShapeButton.vue'
import { onMounted, ref } from 'vue'

const SHAPES = {
  snake: {
    name: 'snake',
    svg: `<svg width="1200" height="632" viewBox="0 0 1200 632" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M-62 492.864C464.179 568.636 -55.6689 150.948 80.3958 59.0228C439.431 -183.542 218.603 497.446 329.778 558.768C440.954 620.091 593.874 621.003 625.992 492.864C697.19 208.805 242.209 155.236 436.765 59.023C648.132 -45.5032 961.138 754.412 1375 436.873" stroke="url(#paint0_linear_268_13)" stroke-width="140"/>
<defs>
<linearGradient id="paint0_linear_268_13" x1="685.898" y1="579.837" x2="697.274" y2="-44.8577" gradientUnits="userSpaceOnUse">
<stop stop-color="#E35E13"/>
<stop offset="1" stop-color="#A981FE"/>
<stop offset="1" stop-color="#FFB661" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`,
    path: `<svg width="40" height="40" viewBox="0 0 1200 632" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M-62 492.864C464.179 568.636 -55.6689 150.948 80.3958 59.0228C439.431 -183.542 218.603 497.446 329.778 558.768C440.954 620.091 593.874 621.003 625.992 492.864C697.19 208.805 242.209 155.236 436.765 59.023C648.132 -45.5032 961.138 754.412 1375 436.873" stroke="url(#paint0_linear_268_13)" stroke-width="140"/>
<defs>
<linearGradient id="paint0_linear_268_13" x1="685.898" y1="579.837" x2="697.274" y2="-44.8577" gradientUnits="userSpaceOnUse">
<stop stop-color="#E35E13"/>
<stop offset="1" stop-color="#A981FE"/>
<stop offset="1" stop-color="#FFB661" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`
  },
  infinite: {
    name: 'infinite',
    svg: `<svg width="1302" height="1258" viewBox="0 0 1302 1258" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M111.724 1057.18C855.722 1578.9 1850.08 377.474 724.923 92.1868C192.391 -42.8379 -23.2861 479.613 107.123 718.082C218.219 921.236 628.645 1032.01 811.953 855.934C1070.96 607.152 907.326 269.614 533.159 346.124C113.232 431.992 419.023 878.264 636.767 535.585" stroke="url(#paint0_linear_275_12)" stroke-width="140" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_275_12" x1="861.066" y1="1056.34" x2="340.011" y2="9.04516" gradientUnits="userSpaceOnUse">
<stop stop-color="#E35E13"/>
<stop offset="1" stop-color="#A981FE"/>
<stop offset="1" stop-color="#FFB661" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`,
    path: `<svg width="40" height="40" viewBox="0 0 1302 1258" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M111.724 1057.18C855.722 1578.9 1850.08 377.474 724.923 92.1868C192.391 -42.8379 -23.2861 479.613 107.123 718.082C218.219 921.236 628.645 1032.01 811.953 855.934C1070.96 607.152 907.326 269.614 533.159 346.124C113.232 431.992 419.023 878.264 636.767 535.585" stroke="url(#paint0_linear_275_12)" stroke-width="140" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_275_12" x1="861.066" y1="1056.34" x2="340.011" y2="9.04516" gradientUnits="userSpaceOnUse">
<stop stop-color="#E35E13"/>
<stop offset="1" stop-color="#A981FE"/>
<stop offset="1" stop-color="#FFB661" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`
  },
  train: {
    name: 'train',
    svg: `<svg width="2030" height="819" viewBox="0 0 2030 819" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M33 530.5C445.129 743.436 263.229 255.664 469.629 176.064C727.629 76.5638 544.128 589.064 690.128 676.064C836.128 763.064 1156.13 729.064 1190.13 545.564C1224.13 362.064 1081.63 -128.436 1562.63 157.564C1833.13 318.402 1441.63 1055.06 1985.13 604.564" stroke="url(#paint0_linear_275_13)" stroke-width="140"/>
<defs>
<linearGradient id="paint0_linear_275_13" x1="1049" y1="726.5" x2="1060" y2="10.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#E35E13"/>
<stop offset="1" stop-color="#A981FE"/>
<stop offset="1" stop-color="#FFB661" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`,
    path: `<svg width="40" height="40" viewBox="0 0 2030 819" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M33 530.5C445.129 743.436 263.229 255.664 469.629 176.064C727.629 76.5638 544.128 589.064 690.128 676.064C836.128 763.064 1156.13 729.064 1190.13 545.564C1224.13 362.064 1081.63 -128.436 1562.63 157.564C1833.13 318.402 1441.63 1055.06 1985.13 604.564" stroke="url(#paint0_linear_275_13)" stroke-width="140"/>
<defs>
<linearGradient id="paint0_linear_275_13" x1="1049" y1="726.5" x2="1060" y2="10.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#E35E13"/>
<stop offset="1" stop-color="#A981FE"/>
<stop offset="1" stop-color="#FFB661" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`
  },
  star: {
    name: 'star',
    svg: `<svg width="1277" height="1202" viewBox="0 0 1277 1202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M638.5 1L638.623 600.41L882.462 46.6721L638.855 600.502L1089.28 176.736L639.03 600.666L1227.47 371.389L639.127 600.884L1276 601L639.127 601.116L1227.47 830.611L639.03 601.334L1089.28 1025.26L638.855 601.498L882.462 1155.33L638.623 601.59L638.5 1201L638.377 601.59L394.538 1155.33L638.145 601.498L187.72 1025.26L637.97 601.334L49.5266 830.611L637.873 601.116L1 601L637.873 600.884L49.5266 371.389L637.97 600.666L187.72 176.736L638.145 600.502L394.538 46.6721L638.377 600.41L638.5 1Z" stroke="url(#paint0_linear_275_16)" stroke-width="120"/>
<defs>
<linearGradient id="paint0_linear_275_16" x1="664.584" y1="1162.16" x2="717.192" y2="-102.348" gradientUnits="userSpaceOnUse">
<stop stop-color="#E35E13"/>
<stop offset="1" stop-color="#A981FE"/>
<stop offset="1" stop-color="#FFB661" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`,
    path: `<svg width="40" height="40" viewBox="0 0 1277 1202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M638.5 1L638.623 600.41L882.462 46.6721L638.855 600.502L1089.28 176.736L639.03 600.666L1227.47 371.389L639.127 600.884L1276 601L639.127 601.116L1227.47 830.611L639.03 601.334L1089.28 1025.26L638.855 601.498L882.462 1155.33L638.623 601.59L638.5 1201L638.377 601.59L394.538 1155.33L638.145 601.498L187.72 1025.26L637.97 601.334L49.5266 830.611L637.873 601.116L1 601L637.873 600.884L49.5266 371.389L637.97 600.666L187.72 176.736L638.145 600.502L394.538 46.6721L638.377 600.41L638.5 1Z" stroke="url(#paint0_linear_275_16)" stroke-width="120"/>
<defs>
<linearGradient id="paint0_linear_275_16" x1="664.584" y1="1162.16" x2="717.192" y2="-102.348" gradientUnits="userSpaceOnUse">
<stop stop-color="#E35E13"/>
<stop offset="1" stop-color="#A981FE"/>
<stop offset="1" stop-color="#FFB661" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`
  },
  circle: {
    name: 'circle',
    svg: `<svg width="1451" height="1451" viewBox="0 0 1451 1451" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.5" cx="725.5" cy="725.5" r="725.5" fill="url(#paint0_linear_275_17)"/>
<defs>
<linearGradient id="paint0_linear_275_17" x1="755.184" y1="1404.03" x2="822.757" y2="-124.625" gradientUnits="userSpaceOnUse">
<stop stop-color="#E35E13"/>
<stop offset="1" stop-color="#A981FE"/>
<stop offset="1" stop-color="#FFB661" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`,
    path: `<svg width="40" height="40" viewBox="0 0 1451 1451" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.5" cx="725.5" cy="725.5" r="725.5" fill="url(#paint0_linear_275_17)"/>
<defs>
<linearGradient id="paint0_linear_275_17" x1="755.184" y1="1404.03" x2="822.757" y2="-124.625" gradientUnits="userSpaceOnUse">
<stop stop-color="#E35E13"/>
<stop offset="1" stop-color="#A981FE"/>
<stop offset="1" stop-color="#FFB661" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`
  }
}
const theme = ref<string | null>(null)

const sendMessage = (message: unknown): void => {
  parent.postMessage(message, '*')
}

const insert = (key: string): void => {
  if (key) {
    const shape = SHAPES[key]

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
    <h3>Gradient Shapes</h3>
    <div class="buttons">
      <shape-button
        v-for="shape in SHAPES"
        :key="shape.name"
        :path="shape.path"
        :shape="shape.name"
        @click="() => insert(shape.name)"
      ></shape-button>
    </div>
  </main>
</template>

<style lang="less">
main {
  text-align: center;
  button {
    margin: 1em;
    border-radius: 1em;
  }
}
[data-theme='dark'] {
  /** Dark styles */

  color: #7efff5;
  background-color: #18181a;
  button {
    border: 1px solid #7efff5;
  }
}

[data-theme='light'] {
  /** Light styles */
  color: #6911d4;
  button {
    border: 1px solid #6911d4;
  }
}

.buttons {
  display: flex;
  flex-direction: column;
}
</style>
