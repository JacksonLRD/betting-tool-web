import { z } from 'zod'

export const methodSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  stakeBase: z.number().min(1, 'Stake é obrigatória'),
  settledBets: z.number().optional(),
  accumulatedResult: z.number().optional(),
  status: z.enum(['VALIDADO', 'EM_VALIDACAO', 'ABANDONADO']),
  description: z.string().optional()
})

export type MethodSchema = z.infer<typeof methodSchema>
