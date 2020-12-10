import { makeObservable, observable, action } from 'mobx'

class CatalogStore {
  products = []

  constructor () {
    makeObservable(this, {
      products: observable,
      setProducts: action.bound
    })
  }

  setProducts (products) {
    this.products = products
  }
}

const store = new CatalogStore()
export default store
