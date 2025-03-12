import type { Category, Data } from '@/types/GraphicInterface'

export const categories: Category[] = [
  {
    name: 'Daily',
    values: ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
  },
  {
    name: 'Monthly',
    values: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  {
    name: 'Yearly',
    values: [
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
      '2025',
    ],
  },
]

export const data: Data[] = [
  {
    name: 'stress',
    values: [12, 50, 35, 80, 45, 100, 60, 120, 90],
  },
  {
    name: 'pulse',
    values: [70, 65, 85, 95, 80, 110, 90, 105, 115],
  },
  {
    name: 'temperature',
    values: [36.5, 37.0, 36.7, 38.0, 37.5, 38.3, 37.2, 39.0, 38.4],
  },
  {
    name: 'calories',
    values: [200, 300, 250, 350, 300, 400, 450, 350, 500],
  },
]
