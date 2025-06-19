import { connect } from '@/lib/db'
import { MethodsModel } from '@/lib/models/MethodsModel'
import {
  CreateMethod,
  DeleteMethod,
  Method,
  MethodFromMongo,
  UpdateMethod
} from '@/lib/interfaces/Method'

export class MethodsService {
  constructor() {}

  async create(data: CreateMethod): Promise<void> {
    await connect()

    await MethodsModel.create(data)
  }

  async list(): Promise<Method[]> {
    await connect()
    const methods = await MethodsModel.find({ active: true })

    return methods.map((method) => this.mapMethod(method))
  }

  async update({ id, ...method }: UpdateMethod | DeleteMethod): Promise<void> {
    await connect()

    await MethodsModel.updateOne(
      { _id: id },
      {
        $set: method
      }
    )
  }

  private mapMethod(method: MethodFromMongo): Method {
    return {
      id: method._id,
      name: method.name,
      stakeBase: method.stakeBase,
      settledBets: method.settledBets,
      status: method.status,
      description: method.description
    }
  }
}
