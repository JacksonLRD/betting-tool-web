import { NextRequest, NextResponse } from 'next/server'
import { MethodsService } from '@/lib/services/methodsService'
import { createMethodValidator } from '@/lib/validators/methodsValidator'
import { CreateMethod } from '@/lib/interfaces/Method'
import { routeErrorHandler } from '@/utils/routeErrorHandler'

const methodService = new MethodsService()

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json()

    const validated: CreateMethod = await createMethodValidator.parseAsync(body)
    await methodService.create(validated)

    return NextResponse.json({}, { status: 201 })
  } catch (error) {
    return routeErrorHandler(error)
  }
}

export const GET = async () => {
  try {
    const result = await methodService.list()

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    return routeErrorHandler(error)
  }
}
