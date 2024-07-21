import type { PluginMessageEvent, PluginUIEvent } from './model'

penpot.ui.open('Textured Shapes Plugin', `?theme=${penpot.getTheme()}`, {
  width: 292,
  height: 540
})

penpot.on('themechange', (theme) => {
  sendMessage({ type: 'theme', content: theme })
})

penpot.ui.onMessage<PluginUIEvent>((message) => {
  if (message.type === 'insert-shape') {
    const { svg, name } = message.content

    if (!svg || !name) {
      return
    }

    const shape = penpot.createShapeFromSvg(svg)
    if (shape) {
      shape.x = penpot.viewport.center.x
      shape.y = penpot.viewport.center.y
    }
  }
})

function sendMessage(message: PluginMessageEvent) {
  penpot.ui.sendMessage(message)
}
