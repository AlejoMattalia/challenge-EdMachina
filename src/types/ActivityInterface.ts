export interface DataInterface {
  id: string
  text: string
  percentage: number
}

export interface Percentage {
  id: string
  activities: DataInterface[]
  sleep: DataInterface[]
  wellness: DataInterface[]
}
