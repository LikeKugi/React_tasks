import {types} from 'mobx-state-tree';
import {UsersStore} from "./UsersStore";
import {BoardsStore} from "./BoardsStore";

const RootStore = types.model('RootStore', {
  users: types.optional(UsersStore, {}),
  boards: types.optional(BoardsStore, {}),
})

export default RootStore;
