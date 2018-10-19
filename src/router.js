import VueRouter from 'vue-router'

import Home from './components/Home'
import Products from './components/Products'
import ProductEdit from './components/ProductEdit'
import Customers from './components/Customers'
import CustomerEdit from './components/CustomerEdit'
//import Invoices from './components/Invoices'
//import InvoiceEdit from './components/InvoiceEdit'

const routes = [
  { path: '/', component: Home },

  { path: '/products', component: Products },
  { path: '/products/:id', component: ProductEdit },

  { path: '/customers', component: Customers },
  { path: '/customers/:id', component: CustomerEdit },

  //{ path: '/invoices', component: Invoices },
  //{ path: '/invoices/:id', component: InvoiceEdit },
]

export default new VueRouter({
  routes
})