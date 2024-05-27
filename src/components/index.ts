import SvgIcon from './SvgIcon/index.vue';
import Pagination from './Pagination/index.vue'
const allGolbalComponent: any = { SvgIcon, Pagination }
export default {
   install(app: any) {
      Object.keys(allGolbalComponent).forEach((key: string) => {
         app.component(key, allGolbalComponent[key]);
      })
   }
}