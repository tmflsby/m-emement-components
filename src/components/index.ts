import { App } from 'vue'
import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import trend from './trend'
import menu from './menu'

const components = [
  chooseIcon,
  chooseArea,
  chooseTime,
  chooseDate,
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