import "./styles/base.css"

import { Engine } from "@babylonjs/core"

import HomeScene from './scenes/home'

function createView() {
  const view = document.createElement("canvas")
  view.setAttribute('id', 'view')
  return view
}

const view = createView()
document.body.appendChild(view)

const engine = new Engine(view, true)

const homeScene = HomeScene(view, engine)

engine.runRenderLoop(() => {
  homeScene.render()
})

