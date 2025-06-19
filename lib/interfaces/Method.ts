export interface CreateMethod {
  name: string
  stakeBase: number
  settledBets?: number
  accumulatedResult?: number
  status: 'VALIDADO' | 'EM_VALIDACAO' | 'ABANDONADO'
  description?: string
}
