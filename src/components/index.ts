import { App } from 'vue'
import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import trend from './trend'
import menu from './menu'
import notification from './notification'
import list from './list'
import chooseCity from './chooseCity'

const components = [
  chooseIcon,
  chooseArea,
  chooseTime,
  chooseDate,
  trend,
  menu,
  notification,
  list,
  chooseCity
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}