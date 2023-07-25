import {types} from 'mobx-state-tree';
import {UsersStore} from "./UsersStore";
import {BoardsStore} from "./BoardsStore";

const RootStore = types.model('RootStore', {
  users: UsersStore,
  boards: BoardsStore,
})

export default RootStore;
