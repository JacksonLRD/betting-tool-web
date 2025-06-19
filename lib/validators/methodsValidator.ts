import { z } from 'zod'

export const createMethodValidator = z.object({
  name: z.string(),
  stakeBase: z.number(),
  settledBets: z.number().optional(),
  accumulatedResult: z.number().optional(),
  status: z.enum(['VALIDADO', 'EM_VALIDACAO', 'ABANDONADO']),
  description: z.string().optional()
})

export const updateMethodValidator = z.object({
  id: z.string(),
  name: z.string().optional(),
  stakeBase: z.number().optional(),
  settledBets: z.number().optional(),
  accumulatedResult: z.number().optional(),
  status: z.enum(['VALIDADO', 'EM_VALIDACAO', 'ABANDONADO']).optional(),
  description: z.string().optional()
})
