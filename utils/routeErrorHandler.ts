import { ZodError } from 'zod'
import { NextResponse } from 'next/server'

export function routeErrorHandler(error: unknown, message?: string) {
  if (error instanceof ZodError) {
    return new NextResponse(error.message, { status: 400 })
  }

  const errorMessage =
    error instanceof Error ? error.message : 'Unexpected exception'

  const bodyMessage = message ? `${message}: ${errorMessage}` : errorMessage

  return new NextResponse(bodyMessage, {
    status: 500
  })
}
