export interface IUser {
  id: string | number
  name: string
}

export interface IApiUserAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

export interface IApiUserCompany {
  name: string
  catchPhrase: string
  bs: string
}

export interface IApiUser {
  id: number
  name: string
  email: string
  address: IApiUserAddress
  phone: string
  website: string
  company: IApiUserCompany
}
