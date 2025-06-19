import { connect } from '@/lib/db'
import { MethodsModel } from '@/lib/models/MethodsModel'
import { CreateMethod } from '@/lib/interfaces/Method'

export class MethodsService {
  constructor() {}

  async create(data: CreateMethod) {
    await connect()
    const model = new MethodsModel(data)
    console.log(model)
    await model.save()
  }

  private async createConnection() {
    await connect()
  }
}
