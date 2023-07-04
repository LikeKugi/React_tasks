import {makeAutoObservable} from "mobx";

class UserState {
  userName = ''
  users = [];
  constructor() {
    makeAutoObservable(this);
  }
  setUsername(user) {
    this.userName = user;
  }
  addUser(user) {
    this.users.push(user);
  }
}

export default new UserState();
