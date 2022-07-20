import { App } from 'vue'
import chooseIcon from './chooseIcon'
import menu from './menu'

const components = [
  chooseIcon,
  menu
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}