import { makeObservable, observable, action } from 'mobx'

class UserStore {
  userContext = null

  constructor () {
    makeObservable(this, {
      userContext: observable,
      setUserContext: action.bound
    })
  }

  setUserContext (context) {
    this.userContext = context
  }
}

const userStore = new UserStore()
export default userStore
