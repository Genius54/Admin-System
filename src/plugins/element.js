import Vue from 'vue'
import {
        Form, FormItem, Button, Input, Message,MessageBox,Header,Footer,Container,
        Aside,Main,Menu,MenuItem,Submenu,MenuItemGroup,Breadcrumb,BreadcrumbItem,
        Card,Row,Col,Table,TableColumn,Switch,Tooltip,Pagination,Dialog,Tag,Tree,
        Select,Option,Cascader,
       } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.prototype.$message=Message
Vue.prototype.$confirm=MessageBox.confirm
