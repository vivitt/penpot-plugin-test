/**
 * This file contains the typescript interfaces for the plugin events.
 */

export interface InsertShapeEvent {
  type: 'insert-shape'
  content: {
    svg: string
    name: string
  }
}

export interface InitPluginUIEvent {
  type: 'ready'
}

export type PluginUIEvent = InitPluginUIEvent | InsertShapeEvent

export interface ThemePluginEvent {
  type: 'theme'
  content: string
}
export type PluginMessageEvent = ThemePluginEvent
