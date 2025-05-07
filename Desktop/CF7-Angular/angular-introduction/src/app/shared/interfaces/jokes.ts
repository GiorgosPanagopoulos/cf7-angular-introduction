export interface DadJoke {
  id: string
  joke: string
  status: number
}

export interface ChuckNorrisJoke {
  categories: any[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}