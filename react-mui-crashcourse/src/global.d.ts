interface ICity {
  id: number
  name: string
  tours: ITour[]
}

interface ITour {
  id: number
  name: string
  duration: number
  rating: number
  numberOfReviews: number
  price: number
  image: string

}
