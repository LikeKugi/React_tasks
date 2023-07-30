import {cast, flow, getParent, onSnapshot, types} from 'mobx-state-tree';
import apiCall from "../service/api/ApiCall";
import { User } from './UsersStore';
import {DraggableLocation} from "react-beautiful-dnd";
import {toJS} from "mobx";

const Task = types.model('Task', {
  id: types.identifier,
  title: types.string,
  description: types.string,
  assignee: types.safeReference(User),
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

    // @ts-ignore
    onSnapshot(self, self.save)
  }),
  save: flow(function* ({tasks}) {
    // @ts-ignore
    const {id: boardID} = getParent(self, 2);
    const {id: status} = self;

    yield apiCall.put(`boards/${boardID}/tasks/${status}`, {tasks});
  }),
  afterCreate() {
    this.load();
  },
}))

const Board = types.model('Board', {
  id: types.identifier,
  title: types.string,
  sections: types.array(BoardSection),
}).actions((self) => ({
  moveTask: (taskID: string, source: DraggableLocation, destination:  DraggableLocation | null | undefined) => {
    if (!destination) return;

    const fromSection = self.sections.find(section => section.id === source.droppableId);
    const toSection = self.sections.find(section => section.id === destination.droppableId);

    if (!fromSection || !toSection) return;

    const taskToMoveIndex = fromSection.tasks.findIndex(task => task.id === taskID);
    const [task] = fromSection.tasks.splice(taskToMoveIndex, 1);

    // @ts-ignore
    toSection.tasks.splice(destination.index, 0, task.toJSON());
  },
}))

const BoardsStore = types.model('BoardsStore', {
  boards: types.optional(types.array(Board), []),
  active: types.safeReference(Board),
}).views((self) => ({
  get list(){
    return self.boards.map(({id, title}) => ({id, title}));
  }
})).actions((self) => ({
  selectBoard(id: string) {
    // @ts-ignore
    self.active = id;
  },
  load: flow(function* () {
    self.boards = yield apiCall.get('boards');
    // @ts-ignore
    self.active = 'MAIN';
  }),
  afterCreate() {
    this.load();
  }
}));

export {BoardsStore};
