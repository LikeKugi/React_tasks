export type TodoStateType = 'all' | 'open' | 'completed'

export interface ITodo {
  id: number
  completed: boolean
  title: string
}
