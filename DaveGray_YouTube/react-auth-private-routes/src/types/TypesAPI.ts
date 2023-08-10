export interface IUserCreateAPI {
  email: string
  password: string
}

export interface IUserResponseAPI {
  accessToken: string,
  user: {
    email: string,
    id: number,
  }
}
