import { Schema, model, models } from 'mongoose'

const methodSchema = new Schema(
  {
    name: { type: 'string', required: true },
    stakeBase: { type: 'number', required: true },
    settledBets: { type: 'number' },
    accumulatedResult: { type: 'number' },
    status: { type: 'string' },
    description: { type: 'string' }
  },
  { collection: 'methods' }
)

export const MethodsModel = models.Methods || model('Methods', methodSchema)
