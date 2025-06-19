export interface Method {
  id: string
  name: string
  stakeBase: number
  settledBets?: number
  accumulatedResult?: number
  status: 'VALIDADO' | 'EM_VALIDACAO' | 'ABANDONADO'
  description?: string
}

export interface MethodFromMongo {
  _id: string
  name: string
  stakeBase: number
  settledBets?: number
  accumulatedResult?: number
  status: 'VALIDADO' | 'EM_VALIDACAO' | 'ABANDONADO'
  description?: string
  createdAt: Date
  updatedAt: Date
  active: boolean
}

export type CreateMethod = Omit<Method, 'id'>

export type UpdateMethod = {
  id: string
  name?: string
  stakeBase?: number
  settledBets?: number
  accumulatedResult?: number
  status?: 'VALIDADO' | 'EM_VALIDACAO' | 'ABANDONADO'
  description?: string
}

export type DeleteMethod = {
  id: string
  active: boolean
}
