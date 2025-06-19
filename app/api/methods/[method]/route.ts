import { NextRequest, NextResponse } from 'next/server'
import { routeErrorHandler } from '@/utils/routeErrorHandler'
import { MethodsService } from '@/lib/services/methodsService'
import { updateMethodValidator } from '@/lib/validators/methodsValidator'
import { UpdateMethod } from '@/lib/interfaces/Method'

const methodService = new MethodsService()

export const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<{ method: string }> }
) => {
  try {
    const { method } = await params

    const body = await request.json()

    const values: UpdateMethod = await updateMethodValidator.parseAsync({
      id: method,
      ...body
    })

    await methodService.update(values)

    return new Response(null, { status: 204 })
  } catch (error) {
    return routeErrorHandler(error)
  }
}

export const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<{ method: string }> }
) => {
  try {
    const { method } = await params

    await methodService.update({ id: method, active: false })

    return new Response(null, { status: 204 })
  } catch (error) {
    return routeErrorHandler(error)
  }
}
