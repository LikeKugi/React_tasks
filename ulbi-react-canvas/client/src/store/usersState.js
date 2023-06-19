import {makeAutoObservable} from "mobx";

class UserState {
  users = [];
  constructor() {
    makeAutoObservable(this);
  }
  addUser(user) {
    this.users.push(user);
  }
}

export default new UserState();
