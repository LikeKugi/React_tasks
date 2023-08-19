export interface IUserCreateAPI {
  email: string
  password: string
}

export interface IUserRequestAPI extends IUserCreateAPI {
  id: number
}

export interface IUserResponseAPI {
  accessToken: string,
  user: {
    email: string,
    id: number,
  }
}
