import { Schema, model, models } from 'mongoose'

const methodSchema = new Schema(
  {
    name: { type: 'string', required: true },
    stakeBase: { type: 'number', required: true },
    settledBets: { type: 'number' },
    accumulatedResult: { type: 'number' },
    status: { type: 'string', required: true },
    description: { type: 'string' },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    active: { type: 'boolean', default: true }
  },
  {
    collection: 'methods',
    timestamps: true
  }
)

export const MethodsModel = models.Methods || model('Methods', methodSchema)
