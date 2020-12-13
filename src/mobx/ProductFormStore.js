import { makeObservable, observable, action } from 'mobx'

class ProductFormStore {
  name = ''
  description = ''
  enabled = true
  constructor () {
    makeObservable(this, {
      name: observable,
      description: observable,
      enabled: observable,

      setName: action.bound,
      setDescription: action.bound,
      setEnabled: action.bound
    })
  }

  setName (name) {
    this.name = name
  }

  setDescription (description) {
    this.description = description
  }

  setEnabled (enabled) {
    this.enabled = enabled
  }
}

const store = new ProductFormStore()
export default store
