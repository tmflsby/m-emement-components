import { App } from 'vue'
import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import trend from './trend'
import menu from './menu'

const components = [
  chooseIcon,
  chooseArea,
  trend,
  menu
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}