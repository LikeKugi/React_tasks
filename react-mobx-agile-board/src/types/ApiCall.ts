export interface IPerform {
  url: string,
  data?: object,
  config?: {
    method: 'POST' | 'PUT' | 'DELETE'
  }
}
