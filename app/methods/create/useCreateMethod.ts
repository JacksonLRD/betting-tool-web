import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { methodSchema, MethodSchema } from '@/app/methods/create/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { customAPI } from '@/lib/customAPI'

export const useCreateMethod = () => {
  const router = useRouter()

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting, isValid }
  } = useForm<MethodSchema>({
    resolver: zodResolver(methodSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      stakeBase: 0,
      status: '',
      description: ''
    }
  })

  const onSubmit = async (data: MethodSchema) => {
    const methodData = {
      name: data.name,
      stakeBase: data.stakeBase,
      status: data.status,
      description: data.description
    }

    const api = customAPI()
    await api.post('api/methods', methodData)

    router.push('/methods')
  }

  return {
    handleSubmit,
    control,
    register,
    errors,
    isSubmitting,
    isValid,
    onSubmit
  }
}
