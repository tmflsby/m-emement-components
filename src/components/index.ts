import { App } from 'vue'
import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import menu from './menu'

const components = [
  chooseIcon,
  chooseArea,
  menu
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}