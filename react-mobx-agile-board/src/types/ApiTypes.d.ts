interface IUser {
  id: string,
  createdAt: string,
  name: string,
  avatar: string,
}

interface ITask {
  id: string | number
  title: string
  description: string
  assignee: string
}

interface IBoardSection {
  id: string
  title: string
  tasks: IMSTArray
}

interface IBoard {
  id: string
  title: string
  sections: IBoardSection[]
}

interface IBoardsStore {
  boards: IBoard[]
  active: string
}
