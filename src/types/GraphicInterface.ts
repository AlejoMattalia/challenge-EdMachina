export interface Category {
  name: string
  values: string[]
}

export interface Data {
  name: string
  values: number[]
}

export interface GraphicInterface {
  categories: Category[]
  data: Data[]
}
