import { Schema, model, models } from 'mongoose'

const methodSchema = new Schema(
  {
    name: { type: 'string', required: true },
    stakeBase: { type: 'number', required: true },
    settledBets: { type: 'number', default: 0 },
    accumulatedResult: { type: 'number', default: 0 },
    status: { type: 'string', required: true },
    description: { type: 'string', default: '' },
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
