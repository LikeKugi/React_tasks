import { toJS } from 'mobx';
import {cast, flow, getParent, types} from 'mobx-state-tree';
import apiCall from "../service/api/ApiCall";

const Task = types.model('Task', {
  id: types.identifier,
  title: types.string,
  description: types.string,
  assignee: types.maybe(types.string),
});

const BoardSection = types.model('BoardSection', {
  id: types.identifier,
  title: types.string,
  tasks: types.array(Task),
}).actions((self) => ({
  load: flow(function* () {
    // @ts-ignore
    const {id: boardID} = getParent(self, 2);
    const {id: status} = self;
    const {tasks} = yield apiCall.get(`boards/${boardID}/tasks/${status}`)
    self.tasks = cast(tasks);
  }),
  afterCreate() {
    this.load();
  },
}))

const Board = types.model('Board', {
  id: types.identifier,
  title: types.string,
  sections: types.array(BoardSection),
})

const BoardsStore = types.model('BoardsStore', {
  boards: types.array(Board),
  active: types.safeReference(Board),
}).actions((self) => ({
  load: flow(function* () {
    self.boards = yield apiCall.get('boards');
    console.log(toJS(self.boards));
    // @ts-ignore
    self.active = 'MAIN';
  }),
  afterCreate() {
    this.load();
  }
}));

export {BoardsStore};
