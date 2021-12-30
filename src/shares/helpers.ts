import { ComponentType, createElement } from 'react'
import { render } from 'react-dom'


export const shareWrapper = (component: ComponentType) => (rootNode: Element, props: Record<any, any>) => {
  render(
    createElement(component, props),
    rootNode
  )
}