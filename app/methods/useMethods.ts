import { customAPI } from '@/lib/customAPI'
import { Method } from '@/lib/interfaces/Method'

export const useMethods = () => {
  const listMethods = async (): Promise<Method[]> => {
    const api = customAPI()

    const result = await api.get('api/methods')

    if (result?.data.length === 0) {
      console.log('erro ao listar métodos')
    }

    return result?.data
  }

  return {
    listMethods
  }
}
