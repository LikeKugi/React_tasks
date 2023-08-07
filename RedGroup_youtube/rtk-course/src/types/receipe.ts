export interface IRecipeClear {
  name: string,
  image?: string,
}

export interface IRecipe extends IRecipeClear{
  id: number | string
  name: string
  image?: string
}

